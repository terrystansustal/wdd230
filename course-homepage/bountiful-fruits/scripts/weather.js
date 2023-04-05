const weatherIcon = document.querySelector('#weather-image');
const temperature = document.querySelector('#temperature');
const currentCondition = document.querySelector('#current-condition');
const currentHumid = document.querySelector('#current-humid');

const dayOneTemp = document.querySelector('#day-1-temp');
const dayTwoTemp = document.querySelector('#day-2-temp');
const dayThreeTemp = document.querySelector('#day-3-temp');


const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=d70414605f2d9161bd2e54eb6a00679b';
const urlThreeDays = `https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=d70414605f2d9161bd2e54eb6a00679b`

async function apiFetch()
{
    try
    {
        const response = await fetch(url);
        if (response.ok)
        {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        }

        else
        {
            throw Error(await response.text);
        }
    }
    catch (error)
    {
        console.log(error);
    }
}

function displayWeather(weatherData)
{
    temperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    currentHumid.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;

    const srcIcon = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const description = weatherData.weather[0].description.toUpperCase();

    weatherIcon.setAttribute('src', srcIcon);
    weatherIcon.setAttribute('alt', description);
    currentCondition.textContent = description;
}

apiFetch();
apiFetchThreeDays()

async function apiFetchThreeDays()
{
    try
    {
        const response = await fetch(urlThreeDays);
        if (response.ok)
        {
            const data = await response.json();
            console.log(data);
            displayThreeDays(data);
        }

        else
        {
            throw Error(await response.text);
        }
    }
    catch (error)
    {
        console.log(error);
    }
}

function displayThreeDays(threeDaysData)
{
    dayOneTemp.innerHTML = `${threeDaysData.list[0].main.temp.toFixed(0)}`;
    dayTwoTemp.innerHTML = `${threeDaysData.list[1].main.temp.toFixed(0)}`;
    dayThreeTemp.innerHTML = `${threeDaysData.list[2].main.temp.toFixed(0)}`;
}