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
    }
]

matchaExperiences.forEach(exp => {exp.dateTime.setMonth(exp.dateTime.getMonth() - 1)});

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

// create a google form and pull data from it

// other significant foods

