// http://api.weatherapi.com/v1/current.json?key=ea4c89270e8c47d1a3a140246250802&q=London&aqi=no
const input = document.querySelector('.input');
const searchIcon = document.querySelector('.searchIcon');
const dateInfo = document.querySelector('.dateInfo');
const temp = document.querySelector('.temp');
const condition = document.querySelector('.condition');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.windspeed');
const hIcon = document.querySelector('.hIcon');
const wIcon = document.querySelector('.wIcon');
const wImg = document.querySelector('.wImg');
const img = ["humidity.png","wind.png"];



const weatherConditions = {
    "Sunny":"asset/sun.png",
    "Clear":"asset/haze.png",
    "Partly cloudy":"asset/partly-cloudy.png",
    "Mostly Cloudy":"asset/most-cloudy.png",
    "Overcast":"asset/overcast.png",
    "Mist":"asset/mist.png",
    "Fog":"asset/fog.png",
    "Haze":"asset/haze.png",
    "Light Rain":"asset/light-rain.png",
    "Heavy Rain":"asset/heavy-rain.png",
    "Showers":"asset/shower.png",
    "Thunderstorm":"asset/thunderstrom.png",
    "Snow":"asset/snowy.png",
    "Sleet":"asset/sleet.png",
    "Hail":"asset/hail.png",
    "Tornado":"asset/tornado.png",
    "Hurricane":"asset/hurricane.png",
    "Blizzard":"asset/blizzard.png",
    "Dust Storm":"asset/sandstorm.png"
};
  
const wetherFetch = async()=> {
   
    const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=ea4c89270e8c47d1a3a140246250802&q=` + input.value);
    const data = await result.json();
    console.log(data);
    // dateInfo.innerHTML = `<p>${data.location.localtime}</p>`;
    dateInfo.innerHTML = data.location.localtime;
    temp.innerHTML = `temperature:<p> ${data.current.temp_c}°C</p>`;
    condition.innerHTML = `<p>${data.current.condition.text}</p>`;
    humidity.innerHTML = `<p>${data.current.humidity}%</p> <p>humidity</p>`;
    windSpeed.innerHTML = `<p>${data.current.wind_kph} km/h</p> <p>windspeed</p>`;
    // hIcon.src = `humidity.png`;
    const img1 = document.createElement('img');
    img1.src = `${weatherConditions[data.current.condition.text]}`;
    img1.classList.add('weatherIcon');
    wImg.appendChild(img1);
   

    
    hIcon.style.backgroundImage = `url('humidity.png')`;
    hIcon.style.width = "25px";  // Set a width
    hIcon.style.height = "25px"; // Set a height
    hIcon.style.backgroundSize = "cover"; 
    wIcon.style.backgroundImage = `url('wind.png')`;
    wIcon.style.width = "25px";  // Set a width
    wIcon.style.height = "25px"; // Set a height
    wIcon.style.backgroundSize = "cover"; 
}

// console.log(data.humidity)

searchIcon.addEventListener('click',wetherFetch);