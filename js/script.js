var api_key = b6339f37236798ca7678b7c1a565a6a4


var todaysDateEl=document.getElementById("todaysDateEl");
var forecastDateEl = document.getElementById("forecastDate");
var todayspicEl = document.getElementById("todaysPicEl");
var tempEl = document.getElementById("temperature");
var humidityEl = document.getElementById("humidity");
var windSpeedEl = document.getElementById("wind");
var cityNameEl = document.getElementById("city");
var cityNameEl = document.getElementById("city");
var inputEl = document.getElementById("cities");
var searchEl = document.getElementById("searchBtn");

var forecastDateEl = document.getElementById("forecastDate1");
var forecastDateIconEl = document.getElementById("forecast-pic1");
var forecastTempEl = document.getElementById("forecastTemp1");
var forecastHumidityEl = document.getElementById("forecastHumdity1");
var forecastWind1El = document.getElementById("forecastWind1");

var forecastDate2El = document.getElementById("forecastDate2");
var forecastIcon2El = document.getElementById("forecast-pic2");
var forecastTemp2El = document.getElementById("forecastTemp2");
var forecastHumidity2El = document.getElementById("forecastHumidity2");
var forecastWind1El = document.getElementById("forecastWind2");

var forecastDate3El = document.getElementById("forecastDate3");
var forecastIcon3El = document.getElementById("forecast-pic3");
var forecastTemp3El = document.getElementById("forecastTemp3");
var forecastHumidity3El = document.getElementById("forecastHumidity3");
var forecastWind1El = document.getElementById("forecastWind3");

var forecastDate4El = document.getElementById("forecastDate4");
var forecastIcon4El = document.getElementById("forecast-pic4");
var forecastTemp4El = document.getElementById("forecastTemp4");
var forecastHumidity4El = document.getElementById("forecastHumidity4");
var forecastWind1El = document.getElementById("forecastWind4");

var forecastDate5El = document.getElementById("forecastDate5");
var forecastIcon5El = document.getElementById("forecast-pic5");
var forecastTemp5El = document.getElementById("forecastTemp5");
var forecastHumidity5El = document.getElementById("forecastHumidity5");
var forecastWind1El = document.getElementById("forecastWind5");

var searchesEl = document.getElementById("searches");
var searchHistoryEl = JSON.parse(localStorage.getItem("#search")) || [];

function getWeather(cityName) {
    var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`;
    fetch(currentWeatherUrl)
      .then((data) => data.json())
      .then(function (weather) {
        if (weather.cod === "404") {
          alert("city does not exist");
          return;
        }
        displayWeather(weather);
    });
}

      
  function displayWeather(currentWeather) {
    var weatherContainerEl = document.querySelector(".weather-container");

    
    const currentDate = new Date(currentWeather.dt * 1000);
    const today = todaysDate.getDate();
    const month = todaysDate.getMonth() + 1;
    const year = todaysDate.getFullYear();
    todaysDateEl.innerHTML =
      currentWeather.name + " - " + month + "/" + day + "/" + year + " ";
    let weatherPic = currentWeather.weather[0].icon;
    todaysPicEl.setAttribute(
      "src",
      "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png"
    );
    todaysPicEl.setAttribute("alt", currentWeather.weather[0].description);

    
   
    
    humidityEl.innerHTML = "Humidity: " + currentWeather.main.humidity + "%";

    
    windEl.innerHTML = "Wind Speed: " + currentWeather.wind.speed + " MPH";
    

     var tempKelvin = currentWeather.main.temp;
     var tempF = Math.floor(1.8 * (tempKelvin - 273.15) + 32) + " °F";
     tempEl.innerHTML = "Temperature: " + tempF;

    }


    function getForecastWeather(city) {
        var forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`;
        fetch(forecastWeatherUrl)
          .then((data) => data.json())
          .then(function (forecastWeather) {
            if (forecastWeather.cod === "404") {
              alert("city does not exist");
              return;
            }

            displayForecastWeather(forecastWeather);
        });
        function displayForecastWeather(forecastWeather) {
            var forecastContainerEl = document.querySelectorAll(".forecast");

            var forecastDate = new Date(forecastWeather.list[7].dt * 1000);
            var forecastDay = forecastDate.getDate();
            var forecastMonth = forecastDate.getMonth() + 1;
            var forecastYear = forecastDate.getFullYear();
            forecastDate1El.innerHTML =
              forecastMonth + "/" + forecastDay + "/" + forecastYear;
            var weatherPic = forecastWeather.list[4].weather[0].icon;
            forecastIcon1El.setAttribute(
              "src",
              "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png"
            );
            forecastIcon1El.setAttribute(
              "alt",
              forecastWeather.list[4].weather[0].description
            );
    var tempKelvin = forecastWeather.list[7].main.temp_max;
    var tempF = Math.floor(1.8 * (tempKelvin - 273.15) + 32) + " degrees";
    forecastTemp1El.innerHTML = "Temperature: " + tempF;
    forecastHumidity1El.innerHTML =
      "Humidity: " + forecastWeather.list[7].main.humidity + "%";

    var forecastDate2 = new Date(forecastWeather.list[15].dt * 1000);
    var forecastDay2 = forecastDate2.getDate();
    var forecastMonth2 = forecastDate2.getMonth() + 1;
    var forecastYear2 = forecastDate2.getFullYear();
    forecastDate2El.innerHTML =
      forecastMonth2 + "/" + forecastDay2 + "/" + forecastYear2;

  
    var weatherPic2 = forecastWeather.list[15].weather[0].icon;
    forecastIcon2El.setAttribute(
      "src",
      "https://openweathermap.org/img/wn/" + weatherPic2 + "@2x.png"
    );
    forecastIcon2El.setAttribute(
      "alt",
      forecastWeather.list[15].weather[0].description
    );
   
    var tempKelvin = forecastWeather.list[15].main.temp_max;
    var tempF = Math.floor(1.8 * (tempKelvin - 273.15) + 32) + " degrees";
    forecastTemp2El.innerHTML = "Temperature: " + tempF;
    
    forecastHumidity2El.innerHTML =
      "Humidity: " + forecastWeather.list[15].main.humidity + "%";

    
    var forecastDate3 = new Date(forecastWeather.list[23].dt * 1000);
    var forecastDay3 = forecastDate3.getDate();
    var forecastMonth3 = forecastDate3.getMonth() + 1;
    var forecastYear3 = forecastDate3.getFullYear();
    forecastDate3El.innerHTML =
      forecastMonth3 + "/" + forecastDay3 + "/" + forecastYear3;

   
    var weatherPic3 = forecastWeather.list[23].weather[0].icon;
    forecastIcon3El.setAttribute(
      "src",
      "https://openweathermap.org/img/wn/" + weatherPic3 + "@2x.png"
    );
    forecastIcon3El.setAttribute(
      "alt",
      forecastWeather.list[23].weather[0].description
    );
   
    var tempKelvin = forecastWeather.list[23].main.temp_max;
    var tempF = Math.floor(1.8 * (tempKelvin - 273.15) + 32) + " degrees";
    forecastTemp3El.innerHTML = "Temperature: " + tempF;
    
    forecastHumidity3El.innerHTML =
      "Humidity: " + forecastWeather.list[23].main.humidity + "%";

   
    var forecastDate4 = new Date(forecastWeather.list[31].dt * 1000);
    var forecastDay4 = forecastDate4.getDate();
    var forecastMonth4 = forecastDate4.getMonth() + 1;
    var forecastYear4 = forecastDate4.getFullYear();
    forecastDate4El.innerHTML =
      forecastMonth4 + "/" + forecastDay4 + "/" + forecastYear4;

    
    var weatherPic4 = forecastWeather.list[31].weather[0].icon;
    forecastIcon4El.setAttribute(
      "src",
      "https://openweathermap.org/img/wn/" + weatherPic4 + "@2x.png"
    );
    forecastIcon4El.setAttribute(
      "alt",
      forecastWeather.list[31].weather[0].description
    );
    
    var tempKelvin = forecastWeather.list[31].main.temp_max;
    var tempF = Math.floor(1.8 * (tempKelvin - 273.15) + 32) + " degrees";
    forecastTemp4El.innerHTML = "Temperature: " + tempF;
    
    forecastHumidity4El.innerHTML =
      "Humidity: " + forecastWeather.list[31].main.humidity + "%";

    
    var forecastDate5 = new Date(forecastWeather.list[39].dt * 1000);
    var forecastDay5 = forecastDate5.getDate();
    var forecastMonth5 = forecastDate5.getMonth() + 1;
    var forecastYear5 = forecastDate5.getFullYear();
    forecastDate5El.innerHTML =
      forecastMonth5 + "/" + forecastDay5 + "/" + forecastYear5;

    
    var weatherPic5 = forecastWeather.list[39].weather[0].icon;
    forecastIcon5El.setAttribute(
      "src",
      "https://openweathermap.org/img/wn/" + weatherPic5 + "@2x.png"
    );
    forecastIcon5El.setAttribute(
      "alt",
      forecastWeather.list[39].weather[0].description
    );
    
    var tempKelvin = forecastWeather.list[39].main.temp_max;
    var tempF = Math.floor(1.8 * (tempKelvin - 273.15) + 32) + " degrees";
    forecastTemp5El.innerHTML = "Temperature: " + tempF;
    
    forecastHumidity5El.innerHTML =
      "Humidity: " + forecastWeather.list[31].main.humidity + "%";
  }
}


searchEl.addEventListener("click", function (e) {
  e.preventDefault();
  var searchName = inputEl.value;
  getWeather(searchName);
  getForecastWeather(searchName);
  searchesEl.push(searchName);
  localStorage.setItem("search", JSON.stringify(searchesEl));
  rendersearchesEl();
});

clearEl.addEventListener("click", function (e) {
  e.preventDefault();
  searchHistoryEl = [];
  rendersearchesEl();
});


function rendersearchesEl() {
  searchesEl.innerHTML = "";
  for (let i = 0; i < searchHistoryEl.length; i++) {
    const historyItem = document.createElement("input");
    historyItem.setAttribute("type", "text");
    historyItem.setAttribute("readonly", true);
    historyItem.setAttribute("class", "form-control d-block bg-white");
    historyItem.setAttribute("value", searchHistoryEl[i]);
    historyItem.addEventListener("click", function () {
      getWeather(historyItem.value);
    });
    searchesEl.append(historyItem);
  }
}

renderSearchHistoryEl();
if (searchHistoryEl.length > 0) {
  getWeather(searchHistoryEl[searchHistoryEl.length - 1]);
}