let lastUpdate = new Date(document.lastModified);
document.querySelector("#last-modified").textContent = new Date().toLocaleDateString('en', lastUpdate);

const option = {year: "numeric"};
document.querySelector("#current-year").textContent = new Date().toLocaleDateString("en", option);