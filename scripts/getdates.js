// Display the current copyright year.
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Display the date and time when this HTML document was last modified.
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
