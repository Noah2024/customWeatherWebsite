const button = document.getElementById('apiRequest');
const weatherContent = document.getElementById('weatherContent');
const loadingIcon = document.getElementById('loadingIcon');

let lat;
let long;

function setErrorConext(errorMessage){
    const weatherContentHeader = document.getElementById('weatherContentHeader');  
    errorMessage = errorMessage.replace(/\n/g, "<br>"); 
    weatherContentHeader.innerHTML = ""+errorMessage;
    weatherContent.classList.remove('loading');
    weatherContent.classList.add('error');
    loadingIcon.remove();
}

function reqeustWeatherData(lat, long){
    fetch('https://api.weather.gov/gridpoints/MPX/107,71/forecast', {
        headers:{
            'User-Agent': "Personal Weather App (ndyurasko@gmail.com)"
        }
    }).then(response => {
        if (!response.ok){
            setErrorConext("API response was not ok \n" + response + "\n Please try again later.");
            throw new Error("Api response was not ok" + response.statusText);
        }
        return response.json();
    }).then(data => {
        sessionStorage.setItem("weatherData", JSON.stringify(data));
        window.location.href = "secondPage.html";
    }
    ).catch(error => {
        console.error("There was a problem with the api request", error);
        setErrorConext("There was a problem with the API request \n" + error + "\n Please try again later.");
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
        let location = navigator.geolocation.getCurrentPosition(locationSuccess, () => setErrorConext("Browser needs location permissions"));
        //console.log("Location Recieved", location);
        return location;
    }
}

requestLocationData();
