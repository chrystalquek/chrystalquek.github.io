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

const matchaExperiences = [
    {
        location: 'Spring Coffee',
        dateTime: new Date(2024, 11, 16),
        cardImages: ['assets/images/matcha/spring-coffee.jpeg'],
        gmapsLink: 'https://maps.app.goo.gl/7sWsSCrzzUCkuXCYA',
        description: 'Ordered regular matcha and strawberry matcha. Location is pretty random, cafe has a good view of the Chinatown multi-story carpark. Pics looked good but matcha was mediocre. Do not recommend the strawberry matcha as the strawberry goo and matcha are not very fitting.',
        grassyLevel: 4,
        tasteLevel: 2
    },
    {
        location: 'Hoshino Coffee (Vivo)',
        dateTime: new Date(2024, 11, 22),
        cardImages: ['assets/images/matcha/hoshino-coffee-vivo.HEIC'],
        gmapsLink: 'https://maps.app.goo.gl/wDqQrwAfZYBh26Ce8',
        description: 'This matcha latte is a little hard to describe - while it was very powdery, the taste was surprisingly good and strong. Tasted like good quality matcha powder.',
        grassyLevel: 5,
        tasteLevel: 4
    },
    {
        location: 'Matchaya (Takashimaya)',
        dateTime: new Date(2024, 12, 10),
        cardImages: ['assets/images/matcha/matchaya-taka.HEIC'],
        gmapsLink: 'https://maps.app.goo.gl/ta1wW7dz6DU2EVaN9',
        description: 'Ordered matcha milk and hojicha milk, reduced sugar for both. Sugar was surprisingly difficult to mix in to achieve a uniform taste. Taste is pleasant, not too rich, matcha powder probably medium quality.',
        grassyLevel: 3,
        tasteLevel: 3
    },
    {
        location: 'ToMo Cafe (Neil Road)',
        dateTime: new Date(2025, 3, 1),
        cardImages: ['assets/images/matcha/tomo.HEIC'],
        gmapsLink: 'https://g.co/kgs/WE5dAib',
        description: 'I really liked this cafe, for the food though, I think the matcha was mediocre. Honestly I forgot how it taste like so the ratings might not be accurate.',
        grassyLevel: 3,
        tasteLevel: 3
    },
    {
        location: 'KOKO Cafe and Patisserie',
        dateTime: new Date(2025, 3, 26),
        cardImages: ['assets/images/matcha/koko.HEIC'],
        gmapsLink: 'https://g.co/kgs/C2V61kP',
        description: 'Mediocre, feel like I could make it myself.',
        grassyLevel: 3,
        tasteLevel: 2
    },
    {
        location: 'Haus Coffee',
        dateTime: new Date(2025, 4, 4),
        cardImages: ['assets/images/matcha/haus.jpeg'],
        gmapsLink: 'https://g.co/kgs/91KmYwp',
        description: 'Banana pudding matcha was AMAZING. Banana pudding and matcha go well together, but matcha standalone was already smooth. $9.50 but worth it! Cafe has interesting retro vibe (and interesting music...).',
        grassyLevel: 1,
        tasteLevel: 5
    },
    {
        location: 'Cafe Wabi Sabi',
        dateTime: new Date(2025, 5, 24),
        cardImages: ['assets/images/matcha/cafe-wabi-sabi.HEIC'],
        gmapsLink: 'https://maps.app.goo.gl/Xdv3CtsyuXFgeXH29',
        description: 'I THINK it was not bad, just too long ago to remember. Ratings might be abit random.',
        grassyLevel: 3,
        tasteLevel: 3
    },
    {
        location: 'Wooly\'s Bagels Arab Street',
        dateTime: new Date(2025, 6, 20),
        cardImages: ['assets/images/matcha/wooly-bagels.HEIC'],
        gmapsLink: 'https://maps.app.goo.gl/xghJRxDsiYoqVUtx8',
        description: 'Strawberry matcha was kinda sweet but definitely worth a try. Liked the aesthetic of the drink too.',
        grassyLevel: 1,
        tasteLevel: 4
    },
    {
        location: 'HEYTEA Vivo',
        dateTime: new Date(2025, 7, 25),
        cardImages: ['assets/images/matcha/hey-tea-vivo.HEIC'],
        gmapsLink: 'https://maps.app.goo.gl/xZi8QngnKuvvSA55A',
        description: 'Queued 15 mins for this 1 for 1 promo. Got the Supreme Matcha Latte and Triple Supreme Matcha Latte. Tasted pretty good but wish the warabimochi was more silky. Can\'t complain for the price tho.',
        grassyLevel: 2,
        tasteLevel: 4
    },
    {
        location: 'Nibbies',
        dateTime: new Date(2025, 8, 3),
        cardImages: ['assets/images/matcha/nibbies.HEIC'],
        gmapsLink: 'https://maps.app.goo.gl/EUgNsAaW4Kk3AbCM9',
        description: 'This place was supppperrr quiet, but the board game cafe concept was nice. Ordered the Ube matcha upon recommendation. Could taste the Ube but didn\'t feel that it was very well infused with the matcha.',
        grassyLevel: 2,
        tasteLevel: 2
    },
    {
        location: 'Hi Coffee',
        dateTime: new Date(2025, 8, 24),
        cardImages: ['assets/images/matcha/hi-coffee.HEIC'],
        gmapsLink: 'https://maps.app.goo.gl/j34wyye9wi1vq5F7A',
        description: 'Ordered 2 brands of matcha from them - Ajisai and Niko Neko. One cup for $5 from a hawker stall is OK. Matcha is gau, and awesome, especially the pistachio tints from the Niko Neko.',
        grassyLevel: 1,
        tasteLevel: 5
    },
    {
        location: 'ToMo Cafe (Neil Road)',
        dateTime: new Date(2025, 9, 13),
        cardImages: ['assets/images/matcha/tomo2.HEIC'],
        gmapsLink: 'https://g.co/kgs/WE5dAib',
        description: 'Second time trying matcha here. Actually the Mango Matcha is not bad, the mango puree helps to take some of the grassiness off.',
        grassyLevel: 1,
        tasteLevel: 4
    },
    {
        location: 'Sweedy',
        dateTime: new Date(2025, 9, 20),
        cardImages: ['assets/images/matcha/sweedy.HEIC'],
        gmapsLink: 'https://maps.app.goo.gl/Atz5en3bNTWVCKio9',
        description: 'Wa damn nice, banana pudding matcha combo never fails to disappoint. Location very far though.',
        grassyLevel: 1,
        tasteLevel: 5
    },
    
]

matchaExperiences.forEach(exp => {exp.dateTime.setMonth(exp.dateTime.getMonth() - 1)});

const API_URL = "https://script.google.com/macros/s/AKfycbyggYkcYry2FI-6TnhnwcFSVZFz61PPLDjZXieXQt3rFdv2yiQM4gLniyjBxFRvm_qwnw/exec";


function normalizeApiItem(apiItem) {
    // Convert API object (from Apps Script) -> your card schema
    // apiItem example: { location, dateISO, gmapsLink, description, grassyLevel, tasteLevel, cardImages: [url] }
    return {
      location: apiItem.location || '',
      dateTime: apiItem.dateISO ? (() => { const [y, m, d] = apiItem.dateISO.split('T')[0].split('-'); return new Date(+y, +m - 1, +d); })() : null,
      cardImages: Array.isArray(apiItem.cardImages) && apiItem.cardImages.length ? apiItem.cardImages : [],
      gmapsLink: apiItem.gmapsLink || '',
      description: apiItem.description || '',
      grassyLevel: Number(apiItem.grassyLevel || 0),
      tasteLevel: Number(apiItem.tasteLevel || 0),
    };
  }

async function load() {
    let apiItems = [];
    try {
        const res = await fetch(API_URL, { cache: "no-store" });
        const data = await res.json();
        apiItems = (data.items || []).map(normalizeApiItem);
    } catch (e) {
        console.warn('Failed to fetch API, rendering static only:', e);
    }

    const mergedData = matchaExperiences.concat(apiItems);
    mergedData.sort((a, b) => {
        const dateA = a.dateTime ? a.dateTime.getTime() : 0;
        const dateB = b.dateTime ? b.dateTime.getTime() : 0;
        return dateB - dateA;
    });
    showCards(mergedData);
}


const cards = document.querySelector(".matcha-cards");

const showCards = (matchaExperiences) => {

    let cardsHtml = "";

    for (const exp of matchaExperiences) {
        cardsHtml += `
        <div class="matcha-card">
            <div class="card-image-container">
                <img loading="lazy" src="${exp.cardImages[0]}" referrerPolicy="no-referrer"/>
            </div>
            <div class="card-content">
                <h3><a href="${exp.gmapsLink}" target="_blank">${exp.location}</a></h3>
                <p class="date">${exp.dateTime.toDateString()}</p>
                <p>${exp.description}</p>
                <div class="ratings">
                    <span class="grassy">Grassy Level: ${'🌿'.repeat(exp.grassyLevel)}</span>
                    <span class="taste">Taste Level: ${'⭐'.repeat(exp.tasteLevel)}</span>
                </div>
            </div>
        </div>
        `;
    }

    cards.innerHTML = cardsHtml;
}



document.addEventListener("DOMContentLoaded", load);


// TODOs

// other significant foods

