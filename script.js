const button = document.getElementById('apiRequest');
let lat;
let long;

function reqeustWeatherData(lat, long){
    
}

function locationSuccess(postion){
    lat = postion.coords.latitude;
    long = postion.coords.longitude;
    console.log("Latitude: " + lat +  ", Longitude: " + long);
    return lat, long;
}

function requestLocationData(){
    console.log("Requesting Location Data from User");
    if (navigator.geolocation){
        let location = navigator.geolocation.getCurrentPosition(locationSuccess);
        console.log("Location Recieved", location);
        return location;
    }
}

console.log(button);
button.addEventListener('click', ()=>{
    console.log("API Request Initiated");
    requestLocationData();
})
