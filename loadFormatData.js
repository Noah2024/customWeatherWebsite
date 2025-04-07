const today = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.addEventListener('DOMContentLoaded', () => {
    const weatherData = JSON.parse(sessionStorage.getItem("weatherData"));
    console.log(weatherData)
})