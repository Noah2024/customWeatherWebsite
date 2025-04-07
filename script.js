const button = document.getElementById('apiRequest');
const weatherContent = document.getElementById('weatherContent');
let lat;
let long;

function setErrorConext(){

}

function reqeustWeatherData(lat, long){
    fetch('https://api.weather.gov/gridpoints/MPX/107,71/forecast', {
        headers:{
            'User-Agent': "Personal Weather App (ndyurasko@gmail.com)"
        }
    }).then(response => {
        if (!response.ok){
            throw new Error("Api response was not ok" + response.statusText);
        }
        return response.json();
    }).then(data => {
        console.log("Weather Dat Recieved", data);
    }
    ).catch(error => {
        console.error("There was a problem with the api request", error);
    })
    }

function locationSuccess(postion){
    lat = postion.coords.latitude;
    long = postion.coords.longitude;
    console.log("Location Recieved");
    console.log("Latitude: " + lat +  ", Longitude: " + long);
    reqeustWeatherData(lat, long);
    //return lat, long;
}

function requestLocationData(){
    console.log("Requesting Location Data from User");
    if (navigator.geolocation){
        let location = navigator.geolocation.getCurrentPosition(locationSuccess);
        //console.log("Location Recieved", location);
        return location;
    }
}

console.log(button);
button.addEventListener('click', ()=>{
    console.log("API Request Initiated");
    requestLocationData();
})
