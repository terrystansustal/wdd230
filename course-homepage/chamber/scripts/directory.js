const jsonFile = 'json/data.json';

async function getBusinessData() {
    const response = await fetch(jsonFile);
    const data = await response.json();
    
    displayBusinesses(data.businesses);
}

getBusinessData();

const displayBusinesses = function (businesses) {
    const cards = document.querySelector('section.cards');

    businesses.forEach((business) => {
        let section = document.createElement('section');
        let companyName = document.createElement('h3');
        let img = document.createElement('img');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let url = document.createElement('a');
        let membership = document.createElement('p');

        // Build the image/logo of business
        img.setAttribute('src', business.image);
        img.setAttribute('alt', `Logo of business`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '300');
        img.setAttribute('height', '300');

        // Build the address, phone number, url, and membership content
        companyName.textContent = `${business.company}`;
        address.textContent = `${business.address}`;
        phoneNumber.textContent = `${business.phoneNumber}`;
        url.textContent = `${business.website}`;
        url.setAttribute('href', business.website);
        membership.textContent = `${business.membership}`;

        // Append the section(cards) with the created elements
        section.appendChild(img);
        section.appendChild(companyName);
        section.appendChild(address);
        section.appendChild(phoneNumber);
        section.appendChild(url);
        section.appendChild(membership);

        cards.appendChild(section);
    });
}

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("section");

// gridButton.addEventListener("click", () => {
//     display.classList.add("grid");
//     display.classList.remove("list");
// });

// listButton.addEventListener("click", () => {
//     display.classList.add("list");
//     display.classList.remove("grid");
// })

gridButton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listButton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}