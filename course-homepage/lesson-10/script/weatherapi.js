
// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption')

// URL
const url = 'http://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=d70414605f2d9161bd2e54eb6a00679b'

async function apiFetch()
{
    try
    {
        const response = await fetch(url);
        if (response.ok)
        {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else
        {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}