const today = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weatherBoxes = document.querySelectorAll(".weatherBox");
const day = today.getDay();
const numBoxes = 6;

function loadWeatherData(data){
    console.log(weatherBoxes);
    for (let i = 0; i < numBoxes; i++){
        curtTime = data.properties.periods[i]
        weatherBoxes[i].innerHTML = `
        <h2> ${curtTime.name} </h2>
        <img src = "${curtTime.icon}", alt="Weather icon"> > 
        <p> Temperature: ${curtTime.temperature} ${curtTime.temperatureUnit}</p>
        <p> Wind Speed: ${curtTime.windSpeed} </p>
        <p> Wind Direction: ${curtTime.windDirection} </p>
        <p> ${curtTime.detailedForecast}/<p>
        `; 
    }
}
//p> 

document.addEventListener('DOMContentLoaded', () => {
    const weatherData = JSON.parse(sessionStorage.getItem("weatherData"));
    console.log(weatherData)
    console.log(daysOfWeek[today.getDay()]);
    loadWeatherData(weatherData);
})