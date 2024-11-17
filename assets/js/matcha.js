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
    }
]

const cards = document.querySelector(".matcha-cards");

const showCards = () => {

    let cardsHtml = "";

    for (const exp of matchaExperiences) {
        cardsHtml += `
        <div class="matcha-card">
            <div class="card-image" style="background-image: url(${exp.cardImages[0]});"></div>
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



document.addEventListener("DOMContentLoaded", showCards);


// TODOs
// other significant foods

