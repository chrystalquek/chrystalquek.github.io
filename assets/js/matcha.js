AOS.init();

// type Experience = {
//     location: string;
//     dateTime: Date;
//     // accompaniedBy: string[]
// }

// type MatchaExperience = Experience & {
//     cardImages: string[];
//     gmapsLink: string;
//     description: string;
//     grassyLevel: number; // out of 5
//     tasteLevel: number; // out of 5
// }

const API_URL =
  "https://script.google.com/macros/s/AKfycbzq4sgbL3RszxWeupPgKV_gALPuIu_pJ-98-mreZjgnWxej2YdJAd480S-wByM4P9pyWQ/exec";

function normalizeApiItem(apiItem) {
  // Convert API object (from Apps Script) -> your card schema
  // apiItem example: { location, dateISO, gmapsLink, description, grassyLevel, tasteLevel, cardImages: [url] }
  return {
    location: apiItem.location || "",
    dateTime: apiItem.dateISO
      ? (() => {
          const [y, m, d] = apiItem.dateISO.split("T")[0].split("-");
          return new Date(+y, +m - 1, +d);
        })()
      : null,
    cardImages:
      Array.isArray(apiItem.cardImages) && apiItem.cardImages.length
        ? apiItem.cardImages.map((url) => url.replace(/sz=w\d+/, "sz=w800"))
        : [],
    gmapsLink: apiItem.gmapsLink || "",
    description: apiItem.description || "",
    grassyLevel: Number(apiItem.grassyLevel || 0),
    tasteLevel: Number(apiItem.tasteLevel || 0),
    cropBox: apiItem.cropBox || null,
  };
}

let sortMode = "date";
let allData = [];

function shouldRevisit(exp) {
  return exp.tasteLevel >= 4 && exp.grassyLevel <= 2;
}

function revisitScore(exp) {
  return exp.tasteLevel * 2 - exp.grassyLevel;
}

function getSorted(data, mode) {
  const sorted = [...data];
  if (mode === "date") {
    sorted.sort((a, b) => {
      const dateA = a.dateTime ? a.dateTime.getTime() : 0;
      const dateB = b.dateTime ? b.dateTime.getTime() : 0;
      return dateB - dateA;
    });
  } else {
    sorted.sort((a, b) => revisitScore(b) - revisitScore(a));
  }
  return sorted;
}

async function load() {
  let apiItems = [];
  try {
    const res = await fetch(API_URL, { cache: "no-store" });
    const data = await res.json();
    apiItems = (data.items || []).map(normalizeApiItem);
  } catch (e) {
    console.warn("Failed to fetch API, rendering static only:", e);
  }

  allData = apiItems;

  const btnDate = document.getElementById("sortDate");
  const btnRevisit = document.getElementById("sortRevisit");

  btnDate.addEventListener("click", () => {
    sortMode = "date";
    btnDate.classList.add("active");
    btnRevisit.classList.remove("active");
    showCards(getSorted(allData, "date"));
  });
  btnRevisit.addEventListener("click", () => {
    sortMode = "revisit";
    btnRevisit.classList.add("active");
    btnDate.classList.remove("active");
    showCards(getSorted(allData, "revisit"));
  });

  showCards(getSorted(allData, "date"));
}

function loadCroppedImages() {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const canvas = entry.target;
        obs.unobserve(canvas);
        const src = canvas.dataset.src;
        if (!src || src === "undefined") {
          console.log("No valid src for canvas, skipping:", canvas);
          return; // ← add this guard
        }
        const cropBox = (() => {
          try {
            return JSON.parse(canvas.dataset.cropbox);
          } catch {
            return null;
          }
        })();
        const img = new Image();
        //   img.crossOrigin = 'anonymous';

        img.onload = () => {
          const displayW = canvas.parentElement.offsetWidth;
          const displayH = canvas.parentElement.offsetHeight;
          canvas.width = displayW;
          canvas.height = displayH;
          const ctx = canvas.getContext("2d");

          let sx, sy, sw, sh;

          if (!cropBox) {
            sx = 0;
            sy = 0;
            sw = img.naturalWidth;
            sh = img.naturalHeight;
          } else {
            const iw = img.naturalWidth,
              ih = img.naturalHeight;
            const cx = ((cropBox.x1 + cropBox.x2) / 2) * iw;
            const cy = ((cropBox.y1 + cropBox.y2) / 2) * ih;
            const bw = (cropBox.x2 - cropBox.x1) * iw;
            const bh = (cropBox.y2 - cropBox.y1) * ih;
            const half = (Math.max(bw, bh) * 1.4) / 2;
            sx = Math.max(0, cx - half);
            sy = Math.max(0, cy - half);
            sw = Math.min(iw - sx, half * 2);
            sh = Math.min(ih - sy, half * 2);
          }

          const cropRatio = sw / sh;
          const displayRatio = displayW / displayH;

          if (cropRatio >= displayRatio * 0.85) {
            // Image is squarish or landscape relative to container — cover crop, no whitespace
            const scale = Math.max(displayW / sw, displayH / sh);
            const drawW = sw * scale;
            const drawH = sh * scale;
            ctx.drawImage(
              img,
              sx,
              sy,
              sw,
              sh,
              (displayW - drawW) / 2,
              (displayH - drawH) / 2,
              drawW,
              drawH,
            );
          } else {
            // Image is significantly more portrait — blurred background + centered
            ctx.filter = "blur(12px) brightness(0.85)";
            const bgScale = Math.max(
              displayW / img.naturalWidth,
              displayH / img.naturalHeight,
            );
            const bgW = img.naturalWidth * bgScale;
            const bgH = img.naturalHeight * bgScale;
            ctx.drawImage(
              img,
              (displayW - bgW) / 2,
              (displayH - bgH) / 2,
              bgW,
              bgH,
            );
            ctx.filter = "none";
            const scale = Math.min(displayW / sw, displayH / sh);
            const drawW = sw * scale;
            const drawH = sh * scale;
            ctx.drawImage(
              img,
              sx,
              sy,
              sw,
              sh,
              (displayW - drawW) / 2,
              (displayH - drawH) / 2,
              drawW,
              drawH,
            );
          }
        };

        img.src = src;
      });
    },
    { rootMargin: "200px" },
  );

  document
    .querySelectorAll("canvas[data-src]")
    .forEach((c) => observer.observe(c));
}

const cards = document.querySelector(".matcha-cards");

const showCards = (matchaExperiences) => {
  let cardsHtml = "";

  for (const exp of matchaExperiences) {
    cardsHtml += `
        <div class="matcha-card">
            <div class="card-image-container">
                ${shouldRevisit(exp) ? '<span class="revisit-badge">Revisit ✓</span>' : ""}
                <canvas class="card-img" data-src="${exp.cardImages[0] || ""}" data-cropbox='${JSON.stringify(exp.cropBox || null)}'></canvas>
            </div>
            <div class="card-content">
                <h3><a href="${exp.gmapsLink}" target="_blank">${exp.location}</a></h3>
                <p class="date">${exp.dateTime.toDateString()}</p>
                <p>${exp.description}</p>
                <div class="ratings">
                    <span class="grassy">Grassy Level: ${"🌿".repeat(exp.grassyLevel)}</span>
                    <span class="taste">Taste Level: ${"⭐".repeat(exp.tasteLevel)}</span>
                </div>
            </div>
        </div>
        `;
  }

  cards.innerHTML = cardsHtml;

  loadCroppedImages();
};

document.addEventListener("DOMContentLoaded", load);

// other significant foods
