const today = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weatherBoxes = document.querySelectorAll(".weatherBox");
const day = today.getDay();
const numBoxes = 6;

function loadWeatherData(data){
    console.log(weatherBoxes);
    for (let i = 0; i < numBoxes + day; i++){
        console.log(data.properties.periods[i]);
        weatherBoxes[boxIndex].innerHTML = i;
        weatherBoxes[boxIndex].innerHTML += '"\n <h> TEST <h> \n TEST 2"';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const weatherData = JSON.parse(sessionStorage.getItem("weatherData"));
    console.log(weatherData)
    console.log(daysOfWeek[today.getDay()]);
    loadWeatherData(weatherData);
})