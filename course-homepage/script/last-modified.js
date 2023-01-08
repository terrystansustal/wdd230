let oLastModif = new Date(document.lastModified);

document.getElementById('lastmodified').textContent = new Date().toLocaleDateString('en', oLastModif);

