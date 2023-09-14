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


// Time and Date

setInterval(() => {

var todaysDate = dayjs().format('MMM D, YYYY')
var currentTime = dayjs().format('h:mm a')

document.getElementById("time").innerHTML = currentTime;
document.getElementById("date").innerHTML = todaysDate;

}, 1000);


// Today's Weather

weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    
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
    try {
        const response = await fetch(apiUrlDays);
        const data = await response.json();

        console.log(data);
        //ICON
        icon1.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png`);
        //DATE
        document.getElementById("day1").innerHTML = `${data.list[5].dt_txt}`;
        
        //TEMP
        document.getElementById("temp1").innerHTML = `Temperature: ${data.list[5].main.temp}°F`;
        //HUMIDITY
        document.getElementById("humidity1").innerHTML = `Humidity: ${data.list[5].main.humidity}%`;
        //WIND SPEED
        document.getElementById("wind-speed1").innerHTML = `Wind Speed: ${data.list[5].wind.speed} m/s`;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        temperature.innerHTML = 'Weather data not available';
        humidity.innerHTML = '';
        windSpeed.innerHTML = '';
    }

    // Day 2
    try {
        const response = await fetch(apiUrlDays);
        const data = await response.json();

        console.log(data);

        document.getElementById("day2").innerHTML = `${data.list[13].dt_txt}`;
        icon2.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[13].weather[0].icon}@2x.png`);
        document.getElementById("temp2").innerHTML = `Temperature: ${data.list[13].main.temp}°F`;
        document.getElementById("humidity2").innerHTML = `Humidity: ${data.list[13].main.humidity}%`;
        document.getElementById("wind-speed2").innerHTML = `Wind Speed: ${data.list[13].wind.speed} m/s`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        temperature.innerHTML = 'Weather data not available';
        humidity.innerHTML = '';
        windSpeed.innerHTML = '';
    }
    
    // Day 3
    try {
        const response = await fetch(apiUrlDays);
        const data = await response.json();

        console.log(data);

        document.getElementById("day3").innerHTML = `${data.list[21].dt_txt}`;
        icon3.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[21].weather[0].icon}@2x.png`);
        document.getElementById("temp3").innerHTML = `Temperature: ${data.list[21].main.temp}°F`;
        document.getElementById("humidity3").innerHTML = `Humidity: ${data.list[21].main.humidity}%`;
        document.getElementById("wind-speed3").innerHTML = `Wind Speed: ${data.list[21].wind.speed} m/s`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        temperature.innerHTML = 'Weather data not available';
        humidity.innerHTML = '';
        windSpeed.innerHTML = '';
    }
    
    // Day 4
    try {
        const response = await fetch(apiUrlDays);
        const data = await response.json();

        console.log(data);

        document.getElementById("day4").innerHTML = `${data.list[29].dt_txt}`;
        icon4.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[29].weather[0].icon}@2x.png`);
        document.getElementById("temp4").innerHTML = `Temperature: ${data.list[29].main.temp}°F`;
        document.getElementById("humidity4").innerHTML = `Humidity: ${data.list[29].main.humidity}%`;
        document.getElementById("wind-speed4").innerHTML = `Wind Speed: ${data.list[29].wind.speed} m/s`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        temperature.innerHTML = 'Weather data not available';
        humidity.innerHTML = '';
        windSpeed.innerHTML = '';
    }
    
    // Day 5
    try {
        const response = await fetch(apiUrlDays);
        const data = await response.json();

        console.log(data);
        
        document.getElementById("day5").innerHTML = `${data.list[37].dt_txt}`;
        icon5.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[37].weather[0].icon}@2x.png`);
        document.getElementById("temp5").innerHTML = `Temperature: ${data.list[37].main.temp}°F`;
        document.getElementById("humidity5").innerHTML = `Humidity: ${data.list[37].main.humidity}%`;
        document.getElementById("wind-speed5").innerHTML = `Wind Speed: ${data.list[37].wind.speed} m/s`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        temperature.innerHTML = 'Weather data not available';
        humidity.innerHTML = '';
        windSpeed.innerHTML = '';
    }
})