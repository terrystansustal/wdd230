const toggleMenu = function() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("logo").classList.toggle("close");
    document.getElementById("title").classList.toggle("close");
    document.getElementById("date").classList.toggle("close");
    document.getElementById("social").classList.toggle("close");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;