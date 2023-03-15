const jsonFile = 'json/data.json';

async function getBusinessData() {
    const response = await fetch(jsonFile);
    const data = await response.json();
    
    displayBusinesses(data.businesses);
}

getBusinessData();

const displayBusinesses = function (businesses) {
    const cards = document.querySelector('div#spotlight');

    // Filter the list for Gold and Silver memberships only
    const filteredMembership = businesses.filter((business) => {
        return business.membership === 'Gold Membership' || business.membership === 'Silver Membership'
    });

    // Use Math.random to randomly select memberships
    const randomBusiness = filteredMembership.sort(() => Math.random() - 0.5)
    
    // Display only the first three businesses
    const displayThreeBusiness = randomBusiness.slice(0, 3);

    displayThreeBusiness.forEach((business, index) => {

        if (business.membership == 'Gold Membership')
        {
            let section = document.createElement('section');
            section.classList.add(`business-${index}`);
            let companyName = document.createElement('h3');
            let img = document.createElement('img');
            let address = document.createElement('p');
            let phoneNumber = document.createElement('p');
            let description = document.createElement('p');
            let url = document.createElement('a');
            let membership = document.createElement('p');

            // Build the image/logo of business
            img.setAttribute('src', business.image);
            img.setAttribute('alt', `Logo of business`);
            img.setAttribute('loading', 'lazy');
            img.setAttribute('width', '100');
            img.setAttribute('height', '100');

            // Build the address, phone number, url, and membership content
            companyName.textContent = `${business.company}`;
            address.textContent = `${business.address}`;
            phoneNumber.textContent = `${business.phoneNumber}`;
            description.textContent = `${business.description}`;
            url.textContent = `${business.website}`;
            url.setAttribute('href', business.website);
            membership.textContent = `${business.membership}`;

            // Append the section(cards) with the created elements
            section.appendChild(companyName);
            section.appendChild(img);
            section.appendChild(description);
            section.appendChild(phoneNumber);
            section.appendChild(url);

            cards.appendChild(section);
        }

        else if (business.membership == 'Silver Membership')
        {
            let section = document.createElement('section');
            section.classList.add(`business-${index}`);
            let companyName = document.createElement('h3');
            let img = document.createElement('img');
            let address = document.createElement('p');
            let phoneNumber = document.createElement('p');
            let description = document.createElement('p');
            let url = document.createElement('a');
            let membership = document.createElement('p');

            // Build the image/logo of business
            img.setAttribute('src', business.image);
            img.setAttribute('alt', `Logo of business`);
            img.setAttribute('loading', 'lazy');
            img.setAttribute('width', '100');
            img.setAttribute('height', '100');

            // Build the address, phone number, url, and membership content
            companyName.textContent = `${business.company}`;
            address.textContent = `${business.address}`;
            phoneNumber.textContent = `${business.phoneNumber}`;
            description.textContent = `${business.description}`;
            url.textContent = `${business.website}`;
            url.setAttribute('href', business.website);
            membership.textContent = `${business.membership}`;

            // Append the section(cards) with the created elements
            section.appendChild(companyName);
            section.appendChild(img);
            section.appendChild(description);
            section.appendChild(phoneNumber);
            section.appendChild(url);

            cards.appendChild(section);
        }
        
    });

}

