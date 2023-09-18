var dateEl = document.getElementById("date");
var timeEl = document.getElementById("time");
var submitButton = document.getElementById("button");
var cityInput = document.getElementById("cityInput");
var icon = document.getElementById("weather-icon");
let todaysHead = document.getElementById("todaysHead")
let temperature = document.getElementById("temperature");
let windSpeed = document.getElementById("wind-speed");
let humidity = document.getElementById("humidity");
let cityName = cityInput.value;

apiKey = `58f46e928881407740f79f4c8040c421`;

// Search History

var x = localStorage.getItem("city")
document.getElementById("list-item1").innerHTML = x;


// Time and Date

setInterval(() => {

var todaysDate = dayjs().format('MMM D, YYYY')
var currentTime = dayjs().format('h:mm a')

document.getElementById("time").innerHTML = currentTime;
document.getElementById("date").innerHTML = todaysDate;

}, 1000);

// Set/Get History Functions
function createItem() {
localStorage.setItem("city", cityInput.value)
}

// Today's Weather

weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    createItem();

    if (!cityName) return;

    var apiKey = `58f46e928881407740f79f4c8040c421`;
    const apiUrlToday = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`
    

    try {
        const response = await fetch(apiUrlToday);
        const data = await response.json();

        console.log(data);
        console.log(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        temperature.innerHTML = `Temperature: ${data.main.temp}°F`;
        humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
        windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
        todaysHead.innerHTML = "Today in " + cityName;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        temperature.innerHTML = 'Weather data not available';
        humidity.innerHTML = '';
        windSpeed.innerHTML = '';
    }
})


// 5-day Forecast 




weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    var icon1 = document.getElementById("icon1")
    var icon2 = document.getElementById("icon2")
    var icon3 = document.getElementById("icon3")
    var icon4 = document.getElementById("icon4")
    var icon5 = document.getElementById("icon5")
    let cityName = cityInput.value;
    if (!cityName) return;

    var apiKey1 = `7c006ed91aa6938b8ed4f5598cc3df4c`;
    const apiUrlDays = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;
    
// Day 1

const response = await fetch(apiUrlDays);
const data = await response.json();

console.log(data)

icon1.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`);
document.querySelector('#temp1').innerHTML = 'Temperature: ' + data.list[3].main.temp + '°';
document.querySelector('#humidity1').innerHTML = 'Humidity: ' + data.list[3].main.humidity + '%';
document.querySelector('#wind-speed1').innerHTML = 'Wind Speed: ' + data.list[3].wind.speed + ' m/s';

//     // Day 2
icon2.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[11].weather[0].icon}@2x.png`);
document.querySelector('#temp2').innerHTML = 'Temperature: ' + data.list[11].main.temp + '°';
document.querySelector('#humidity2').innerHTML = 'Humidity: ' + data.list[11].main.humidity + '%';
document.querySelector('#wind-speed2').innerHTML = 'Wind Speed: ' + data.list[11].wind.speed + ' m/s';
    
//     // Day 3
icon3.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[19].weather[0].icon}@2x.png`);
document.querySelector('#temp3').innerHTML = 'Temperature: ' + data.list[19].main.temp + '°';
document.querySelector('#humidity3').innerHTML = 'Humidity: ' + data.list[19].main.humidity + '%';
document.querySelector('#wind-speed3').innerHTML = 'Wind Speed: ' + data.list[19].wind.speed + ' m/s';
    
//     // Day 4
icon4.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[27].weather[0].icon}@2x.png`);
document.querySelector('#temp4').innerHTML = 'Temperature: ' + data.list[27].main.temp + '°';
document.querySelector('#humidity4').innerHTML = 'Humidity: ' + data.list[27].main.humidity + '%';
document.querySelector('#wind-speed4').innerHTML = 'Wind Speed: ' + data.list[27].wind.speed + ' m/s';
    
//     // Day 5
icon5.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[35].weather[0].icon}@2x.png`);
document.querySelector('#temp5').innerHTML = 'Temperature: ' + data.list[35].main.temp + '°';
document.querySelector('#humidity5').innerHTML = 'Humidity: ' + data.list[35].main.humidity + '%';
document.querySelector('#wind-speed5').innerHTML = 'Wind Speed: ' + data.list[35].wind.speed + ' m/s';

})