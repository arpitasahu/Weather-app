//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = 

{
  key : '6c53bf930c70c9a8d8a9498f0d3ca4e4',

  
  baseUrl : "https://api.openweathermap.org/data/2.5/weather"
}

let searchInputbox = document.getElementById('input-box');
//event listenter on keypress
searchInputbox.addEventListener('keypress',(e)=>{
  if(e.keyCode == 13){
  console.log(searchInputbox.value);
  getWeatherReport(searchInputbox.value);
  document.querySelector('.weather-body').style.display = "block";

  }
})

//get weather report
function getWeatherReport(city){
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
  .then(weather => {
    return weather.json();

  }).then(showWeatherReport);
}
//show weather report

function showWeatherReport(weather){
  console.log(weather);

  let city = document.getElementById('city');
  city.innerText =` ${weather.name} ${weather.sys.country}`

  let temperature = document.getElementById('temp');
  temperature.innerHTML =` ${Math.round(weather.main.temp)}&deg;c`;

  let minMaxTemp = document.getElementById('min-max');
  minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;c (min)/ ${Math.ceil(weather.main.temp_max)}&deg;c (max)`

  let weatherType = document.getElementById('weather');
  weatherType.innerText = `${weather.weather[0].main}`


  let date = document.getElementById('date');
  let todayDate = new Date();
  date.innerText = dateManage(todayDate);



  if(weatherType.textContent == 'Clear') {
    document.body.style.backgroundImage = "url('images/clean.jpg')";
    
} else if(weatherType.textContent == 'Clouds') {

    document.body.style.backgroundImage = "url('images/cloud.jpg')";

    
} else if(weatherType.textContent == 'Haze') {

    document.body.style.backgroundImage = "url('images/cloud.jpg')";
    
}     else if(weatherType.textContent == 'Rain') {
    
    document.body.style.backgroundImage = "url('images/rain.jpg')";
    
} else if(weatherType.textContent == 'Snow') {
    
    document.body.style.backgroundImage = "url('images/snow.jpg')";

} else if(weatherType.textContent == 'Thunderstorm') {

    document.body.style.backgroundImage = "url('images/Thunderstorm.jpg')";
    
 


} else if(weatherType.textContent == 'Mist') {

  document.body.style.backgroundImage = "url('images/mist.jpg')";
  
} 

}




//date manage
function dateManage (dateArg){
  let days=  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];
  let date = dateArg.getDate();
  // let day = days[dateArg.getDate()];

  let day = days[dateArg.getDay()];



  
  return `${date} ${month} (${day}), ${year}`;
}


