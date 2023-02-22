// get the two input values of temperature and wind speed,
// check to make sure they meet the specification limits  (<=50°F and >3.0mph)
// allowed to officially calculate the wind chill, and
// either calculate and display the wind chill factor value or display "N/A" (not applicable)
// if the input values did not meet the requirements.

const temp = document.getElementById("temperature");
const windSpeed = document.getElementById("wind-speed");
const tempValue = parseFloat(temp.innerHTML);
const windSpeedValue = parseFloat(windSpeed.innerHTML);

// check to make sure they meet the specification limits  (<=50°F and >3.0mph)
if (tempValue <=50 && windSpeedValue > 3)
{
    const windChill = 35.74 + 0.6215 * tempValue - 35.75 * Math.pow(windSpeedValue, 0.16) + 0.4275 * tempValue * Math.pow(windSpeedValue, 0.16);

    // Display the wind chill
    document.getElementById("wind-chill").innerHTML = Math.round(windChill * 10) / 10;
    console.log(windChill);
}

else
{
    const otherNumber = "N/A";
    document.getElementById("wind-chill)").innerHTML = otherNumber;
}

