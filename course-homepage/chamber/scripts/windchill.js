
const temp = document.querySelector("#temperature");
const windSpeed = document.querySelector("#wind-speed");
const windChill = "N/A";

const currentCon = document.querySelector('#current-condition');
const weatherIcon = document.querySelector('#weather-img');

const tempValue = parseFloat(temp.innerHTML);
const windSpeedValue = parseFloat(windSpeed.innerHTML);

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Daly City&units=imperial&appid=d70414605f2d9161bd2e54eb6a00679b';

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
           throw Error(await response.text()); 
        }
    }
    catch (error)
        {
            console.log(error);
        }
}

function displayWeather(weatherData)
{
    temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</stong>`;
    windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(0)}`;

    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description.toUpperCase();

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);

    currentCon.textContent = desc;

    // check to make sure they meet the specification limits  (<=50°F and >3.0mph)
    if (temp <=50 && windSpeed > 3)
    {
        const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);

        // Display the wind chill
        document.getElementById("wind-chill").innerHTML = Math.round(windChill * 10) / 10;
        console.log(windChill);
    }

    else
    {
        document.querySelector("#wind-chill").innerHTML = `${windChill} &#176;F`;
    }
}

apiFetch();
