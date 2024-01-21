var dateEl = document.getElementById("date");
var timeEl = document.getElementById("time");
var icon = document.getElementById("weather-icon");
let todaysHead = document.getElementById("todaysHead")
let temperature = document.getElementById("temperature");
let windSpeed = document.getElementById("wind-speed");
let humidity = document.getElementById("humidity");
//Search Bar
const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById("cityInput");
const submitButton = document.getElementById("submitBtn");
let listItem1 = document.getElementById('list-item1');
let listItem2 = document.getElementById('list-item2');
let listItem3 =document.getElementById('list-item3');
let listItem4 = document.getElementById('list-item4');
let listItem5 = document.getElementById('list-item5');


apiKey = `58f46e928881407740f79f4c8040c421`;

function saveCity() {

    var cityName = cityInput.value;

    localStorage.setItem('City', JSON.stringify(cityName));
}

function getCity() {

    var lastCity = JSON.parse(localStorage.getItem('City'));

    listItem1.innerHTML = lastCity;

    console.log(lastCity)
}

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    saveCity();
    getCity();
});

// Function to retrieve the JSON array from local storage
function getJsonArray() {
    const storedJsonArray = localStorage.getItem('cityArray');
    return JSON.parse(storedJsonArray) || [];
}

function saveJsonArray(jsonArray) {
    localStorage.setItem('cityArray', JSON.stringify(jsonArray));
}

function addItem() {
    const itemNameInput = document.getElementById('')
    const cityName = cityInput.value.trim();

    if (cityName !== '') {
        const jsonArray = getJsonArray();
        const newCity = { name: cityName };
        jsonArray.push(newCity);
        saveJsonArray(jsonArray);
        displayJsonArrayItems();
        itemNameInput.value = ''; // Clear the input field
    }
};

 // Function to display JSON array items
 function displayJsonArrayItems() {
    const jsonArrayItems = document.getElementById('output');
    const jsonArray = getJsonArray();

    // Clear previous content
    jsonArrayItems.innerHTML = '';

    if (jsonArray.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No items found in the JSON array.';
        jsonArrayItems.appendChild(li);
    } else {
        jsonArray.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item.name;
            jsonArrayItems.appendChild(li);
        });
    }
}

function fillInput(event) {
    const clickedItem = event.target;

    if (clickedItem.tagName === 'LI') {
        cityInput.value = clickedItem.textContent;
    }
}


// Time and Date

setInterval(() => {

    var todaysDate = dayjs().format('MMM D, YYYY')
    var currentTime = dayjs().format('h:mm a')

    document.getElementById("time").innerHTML = currentTime;
    document.getElementById("date").innerHTML = todaysDate;

}, 1000);

// Set/Get History Functions


// Today's Weather

weatherForm.addEventListener('click', async (e) => {
    e.preventDefault();    

    let cityName = cityInput.value;
    var apiKey = `58f46e928881407740f79f4c8040c421`;
    const apiUrlToday = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`

    try {
        const response = await fetch(apiUrlToday);
        const data = await response.json();

        // console.log(data);
        // console.log(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
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




weatherForm.addEventListener('click', async (e) => {
    e.preventDefault();
    var icon1 = document.getElementById("icon1")
    var icon2 = document.getElementById("icon2")
    var icon3 = document.getElementById("icon3")
    var icon4 = document.getElementById("icon4")
    var icon5 = document.getElementById("icon5")
    let cityName = cityInput.value;
    if (!cityName) return;

    var apiKey1 = `7c006ed91aa6938b8ed4f5598cc3df4c`;
    const apiUrlDays = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey1}&units=imperial`;

    // Day 1

    const response = await fetch(apiUrlDays);
    const data = await response.json();

    console.log(data)

    document.querySelector('#forecastDay1').innerHTML = data.list[7].dt_txt
    icon1.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png`);
    document.querySelector('#temp1').innerHTML = 'Temperature: ' + data.list[7].main.temp + '°';
    document.querySelector('#humidity1').innerHTML = 'Humidity: ' + data.list[7].main.humidity + '%';
    document.querySelector('#wind-speed1').innerHTML = 'Wind Speed: ' + data.list[7].wind.speed + ' m/s';

    //     // Day 2
    document.querySelector('#forecastDay2').innerHTML = data.list[15].dt_txt
    icon2.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[15].weather[0].icon}@2x.png`);
    document.querySelector('#temp2').innerHTML = 'Temperature: ' + data.list[15].main.temp + '°';
    document.querySelector('#humidity2').innerHTML = 'Humidity: ' + data.list[15].main.humidity + '%';
    document.querySelector('#wind-speed2').innerHTML = 'Wind Speed: ' + data.list[15].wind.speed + ' m/s';

    //     // Day 3
    document.querySelector('#forecastDay3').innerHTML = data.list[23].dt_txt
    icon3.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[23].weather[0].icon}@2x.png`);
    document.querySelector('#temp3').innerHTML = 'Temperature: ' + data.list[23].main.temp + '°';
    document.querySelector('#humidity3').innerHTML = 'Humidity: ' + data.list[23].main.humidity + '%';
    document.querySelector('#wind-speed3').innerHTML = 'Wind Speed: ' + data.list[23].wind.speed + ' m/s';

    //     // Day 4
    document.querySelector('#forecastDay4').innerHTML = data.list[31].dt_txt
    icon4.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[31].weather[0].icon}@2x.png`);
    document.querySelector('#temp4').innerHTML = 'Temperature: ' + data.list[31].main.temp + '°';
    document.querySelector('#humidity4').innerHTML = 'Humidity: ' + data.list[31].main.humidity + '%';
    document.querySelector('#wind-speed4').innerHTML = 'Wind Speed: ' + data.list[31].wind.speed + ' m/s';

    //     // Day 5
    document.querySelector('#forecastDay5').innerHTML = data.list[39].dt_txt
    icon5.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`);
    document.querySelector('#temp5').innerHTML = 'Temperature: ' + data.list[39].main.temp + '°';
    document.querySelector('#humidity5').innerHTML = 'Humidity: ' + data.list[39].main.humidity + '%';
    document.querySelector('#wind-speed5').innerHTML = 'Wind Speed: ' + data.list[39].wind.speed + ' m/s';

})