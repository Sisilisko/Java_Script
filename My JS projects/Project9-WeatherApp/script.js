const url = "https://api.open-meteo.com/v1/forecast";
const lat = 60.402;
const lon = 25.104;
const city = "Kerava";

const fetchData = async () => {
  const result = await fetch(`${url}?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto&daily=sunrise,sunset&hourly=temperature_2m,precipitation,rain,weathercode,relativehumidity_2m,cloudcover`);
  const data = await result.json();

  console.log(data);
  document.getElementById("city").innerHTML = city;

  const getImage = (description) => {
  const value = description.toLowerCase();

  switch (weathercode) {
    case "partly cloudy":
      return "partly.png";
    case "cloud":
      return "cloud.png";
    case "fog":
      return "fog.png";
    case "sunny":
      return "sunny.png";
    case "cloud":
      return "cloud.png";
    default:
      return "the.png";
  }
};

};

fetchData();
