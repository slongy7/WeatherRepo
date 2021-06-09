

// Entering APIkey
var apiKey = "807c831f926148c11470033f03e76c61";


// Setting the function to query the temp, wind, and humidity 
function setQuery() {
    var cityName = document.getElementById("cityName");
    console.log(cityName.value)
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&appid=" + apiKey + "&units=imperial"
    fetch(queryURL).then(response => {
        return response.json()

    }).then(data => {
        var nameElement = document.getElementById("nameCity");
        var currentDate = moment.unix(data.dt).format("MM/DD/YYYY");
        nameElement.innerHTML = `${data.name} (${currentDate}) <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"/>`;
        var tempElement = document.getElementById("currentTemp");
        tempElement.innerText = data.main.temp;
        var windElement = document.getElementById("wind");
        windElement.innerText = data.wind.speed;
        var humidElement = document.getElementById("humid");
        humidElement.innerText = data.main.humidity;

    // .then(data => {
    //     var nameElement = document.getElementById("nameCity");
    //     var futureDate = moment.unix(data.dt).format("MM/DD/YYYY");
    //     nameElement.innerHTML = `(${futureDate}) <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"/>`;
    // })
    // var tempElement = document.getElementById("currentTemp");
    // tempElement.innerText = data.main.temp;
    // var windElement = document.getElementById("wind");
    // windElement.innerText = data.wind.speed;
    // var humidElement = document.getElementById("humid");
    // humidElement.innerText = data.main.humidity;

        // var UVElement = document.getElementById("uvIndex");
        // // UVElement.innerText = data.
        // console.log(data)
        
    })
}

// localStorage 

// var storageSelector = document.querySelector(".cityName");
// var button = document.querySelector(".city");

// storageSelector.addEventListener("input", letter => {
//     console.log(letter)
//     city.cityContent = letter.target.value
// })

// window.localStorage.setItem("cityName", );
// localStorage.getItem("cityName")


// var searchbtn = document.getElementById("city");
// searchbtn.addEventListener("click", setQuery);

// // 7 day forecast

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={apiKey}


