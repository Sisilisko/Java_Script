const url = "https://api.open-meteo.com/v1/forecast";
const lat = 60.402;
const lon = 25.104;
const city = "Kerava";

const fetchData = async () => {
  const result = await fetch(`${url}?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto&daily=sunrise,sunset&hourly=temperature_2m,precipitation,rain,weathercode,relativehumidity_2m,cloudcover`);
  const data = await result.json();

  console.log(data);
  const curWeather = data.current_weather;

  document.getElementById("city").innerHTML = city;
  document.getElementById("city-info__title").innerHTML = curWeather.temperature + "°";
  document.getElementById("city-info__subtitle").innerHTML = "updated "+ curWeather.time.slice(0,10)+" at "+curWeather.time.slice(11);
  const weatherCode = curWeather.weathercode;

  if (weatherCode == 71) {
    document.getElementById("weather-img").src = 'img/snow.png';
  }

};

fetchData();
