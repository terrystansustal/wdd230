
const datefield = document.querySelector("#todayDate");

const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
let options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
const fulldate = new Intl.DateTimeFormat("en-GB", options).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;

const eventToday = document.getElementById("meet-greet");
const today = new Date().getDay();

if (today === 0) {
    eventToday.style.display = "none";
}

else if (today === 1) {
    eventToday.style.display = "block";
}

else if (today === 2) {
    eventToday.style.display = "block";
}

else if (today === 3) {
    eventToday.style.display = "none";
}

else if (today === 4) {
    eventToday.style.display = "none";
}

else if (today === 5) {
    eventToday.style.display = "none";
}

else if (today === 6) {
    eventToday.style.display = "none";
}