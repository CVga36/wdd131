// WDD 131 - Week 02
// Temple Album JavaScript

// Select the menu button and navigation
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

// Open and close the navigation menu
menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    // Update the menu button
    menuButton.textContent = isOpen ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", String(isOpen));
});

// Display the current year
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;

// Display the last modification date
document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;