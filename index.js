function citySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput.value;
}
let form = document.querySelector(".city-search");
form.addEventListener("submit", citySearch);
let now = new Date();
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];

let todaysDate = document.querySelector("#todays-date");
todaysDate.innerHTML = `${day} ${date} ${month}`;

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `${hour}:${minutes}`;

function changeCelsius() {
  let currentCelsius = document.querySelector("#temperature");
  changeCelsius.addEventListener("click", changeCelsius);
  currentCelsius.innerHTML = 22;
}
function changeFarenheit() {
  let currentFarenheit = document.querySelector("#temperature");
  currentFarenheit.innerHTML = 70;
}
// Bonus Feature
let farenheitLink = document.querySelector("#farenheit-link");

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", changeCelsius);

farenheitLink.addEventListener("click", changeFarenheit);

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
function searchCity(city) {
  let apiKey = "caa8d3f19f81ff5c713259f43a1efd47";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchCity);
}
let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Washington DC");
