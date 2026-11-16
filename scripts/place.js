// WDD 131 - Week 03
// Country Page - Mexicali, Mexico

// Current Year
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;

// Last Modified Date
document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

// Weather Data (Static Values)
const temperature = 8;
const windSpeed = 10;

// Calculate Wind Chill (Celsius)
function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * (wind ** 0.16) + 0.3965 * temp * (wind ** 0.16);
}

// Display Wind Chill
const windChillElement = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);

    windChillElement.textContent = `${windChill.toFixed(1)}°C`;
} else {
    windChillElement.textContent = "N/A";
}