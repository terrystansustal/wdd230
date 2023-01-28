let lastUpdate = new Date(document.lastModified);
document.getElementById("last-modified").textContent = new Date().toLocaleDateString("en", lastUpdate);