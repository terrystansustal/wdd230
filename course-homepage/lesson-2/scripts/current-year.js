const options = {year: "numeric"};
document.getElementById("current-year").textContent = new Date().toLocaleDateString("en", options);