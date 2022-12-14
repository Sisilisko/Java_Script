const url = "https://api.open-meteo.com/v1/forecast";
const lat = 60.402;
const lon = 25.104;
const city = "Kerava";

const fetchData = async () => {
  const result = await fetch(`${url}?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto&daily=sunrise,sunset,shortwave_radiation_sum&hourly=temperature_2m,surface_pressure,precipitation,rain,weathercode,relativehumidity_2m,cloudcover`);
  const data = await result.json();

  console.log(data);
  const curWeather = data.current_weather;

  document.getElementById("city").innerHTML = city;
  document.getElementById("city-info__title").innerHTML = curWeather.temperature + "°";
  document.getElementById("city-info__subtitle").innerHTML = "updated "+ curWeather.time.slice(0,10)+" at "+curWeather.time.slice(11);
  var weatherCode = curWeather.weathercode;
  document.getElementById('prop-wind-speed').innerHTML = curWeather.windspeed + " km/h";
  document.getElementById('prop-cloud').innerHTML = data.hourly.cloudcover[167] + "%";

  if (weatherCode < 5) {
    document.getElementById("weather-img").src = 'img/weather-icons/sun.svg';
    document.getElementById("desc").innerHTML = "Sunny";
  } else if (weatherCode>=5&&weatherCode<20) {
    document.getElementById("weather-img").src = 'img/weather-icons/cloudy.svg';
    document.getElementById("desc").innerHTML = "Cloudy";
  } else if (weatherCode>=20&&weatherCode<70) {
    document.getElementById("weather-img").src = 'img/weather-icons/rainy.svg';
    document.getElementById("desc").innerHTML = "Rainy";
  } else if (weatherCode>=70&&weatherCode<95) {
    document.getElementById("weather-img").src = 'img/weather-icons/snow.svg';
    document.getElementById("desc").innerHTML = "Snow";
  } else if (weatherCode>=95) {
    document.getElementById("weather-img").src = 'img/weather-icons/lightning.svg';
    document.getElementById("desc").innerHTML = "Thunderstorm";
  }
};

fetchData();
