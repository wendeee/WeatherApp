const apiKey = "4a755bcf504fb8f3d425bd310da2ccb9";
const cityName = document.querySelector(".cityName");
const tem = document.querySelector(".temp");
const ico = document.querySelector(".icon");
const hum = document.querySelector(".humidity");
const wnd = document.querySelector(".wind");
const descrip = document.querySelector(".description");

const weatherData = function(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => fetchWeather(data))
}

function fetchWeather(data){
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;

    tem.textContent = `Temperature: ${temp}F`;
    hum.textContent = `Humidity: ${humidity}%`;
    wnd.textContent = `Wind speed is ${speed}Km/h`
    descrip.textContent = `Description: ${description}`
    cityName.textContent = `Weather in ${name}`
    ico.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
   
}


function searchData(){
   
    let search = document.querySelector(".search_input").value;
    weatherData(search)
    
    

}

document.querySelector("button").addEventListener(("click"), function(){
    searchData()
})