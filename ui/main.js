var latitude, longitude

async function getLocation() {
    var res = await fetch("https://location.services.mozilla.com/v1/geolocate?key=test")
    .then((res)=> res.json())
    .catch((e)=> console.log(e))
    latitude = res.location.lat
    longitude = res.location.lng
    console.log(res.location);
    console.log(latitude, longitude);
}
console.log(getLocation());

async function getWeather() {
    var res = await fetch(`https://api.open-meteo.com/v1/gfs?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&forecast_days=1&start_date=2023-03-24&end_date=2023-03-24`)
    .then((res)=> res.json())
    .catch((e)=> console.log(e))
    console.log(res);
}

document.getElementById('getWeather').addEventListener('click', (e)=> {
    getWeather()
})

// fetch api
