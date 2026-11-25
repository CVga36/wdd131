// WDD 131 - Week 04
// Filtered Temple Album

// Temple data
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Three additional temples
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: "images/salt-lake.webp"
    },
    {
        templeName: "San Diego California Temple",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 58005,
        imageUrl: "images/san-diego.webp"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "images/rome.webp"
    }
];

// Select HTML elements
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");
const templeContainer = document.querySelector("#temple-cards");
const pageHeading = document.querySelector("main h1");

// Open and close the mobile navigation menu
menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.textContent = isOpen ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", String(isOpen));
});

// Create a paragraph with a label and value
function createTempleInfo(label, value) {
    const paragraph = document.createElement("p");
    const strong = document.createElement("strong");

    strong.textContent = `${label}: `;

    paragraph.append(strong, String(value));

    return paragraph;
}

// Generate temple cards
function createTempleCards(templeList) {
    // Remove previously displayed cards
    templeContainer.replaceChildren();

    templeList.forEach((temple) => {
        // Create the card
        const card = document.createElement("figure");
        card.classList.add("temple-card");

        // Temple name
        const title = document.createElement("h2");
        title.textContent = temple.templeName;

        // Temple information
        const location = createTempleInfo(
            "Location",
            temple.location
        );

        const dedicated = createTempleInfo(
            "Dedicated",
            temple.dedicated
        );

        const area = createTempleInfo(
            "Area",
            `${temple.area.toLocaleString()} sq ft`
        );

        // Temple image
        const image = document.createElement("img");

        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        // Add everything to the card
        card.append(
            title,
            location,
            dedicated,
            area,
            image
        );

        // Add the card to the gallery
        templeContainer.appendChild(card);
    });
}

// Filter temples based on the selected menu option
function filterTemples(filter) {
    let filteredTemples = temples;

    switch (filter) {
        case "Old":
            filteredTemples = temples.filter(
                (temple) => Number(temple.dedicated.split(",")[0]) < 1900
            );
            break;

        case "New":
            filteredTemples = temples.filter(
                (temple) => Number(temple.dedicated.split(",")[0]) > 2000
            );
            break;

        case "Large":
            filteredTemples = temples.filter(
                (temple) => temple.area > 90000
            );
            break;

        case "Small":
            filteredTemples = temples.filter(
                (temple) => temple.area < 10000
            );
            break;

        case "Home":
        default:
            filteredTemples = temples;
            break;
    }

    // Update the page heading
    pageHeading.textContent =
        filter === "Home" ? "Home" : `${filter} Temples`;

    // Display the filtered cards
    createTempleCards(filteredTemples);
}

// Navigation filter events
document.querySelectorAll("#navigation a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const filter = link.textContent.trim();

        // Update active navigation link
        document.querySelectorAll("#navigation a").forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        // Apply the selected filter
        filterTemples(filter);

        // Close the mobile menu
        navigation.classList.remove("open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    });
});

// Display all temples when the page loads
createTempleCards(temples);

// Display the current year
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

// Display the last modification date
document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;