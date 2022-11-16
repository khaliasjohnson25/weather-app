function citySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("h1");
  form.innerHTML = searchInput.value;
  let h1 = document.querySelector("h1");
}
let form = document.querySelector("#search");
form.addEventListener("submit", search);

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
    "December",
];
let month = months[now.getMonth()];

let todaysDate = document.querySelector("#todays-date");
todaysDate.innerHTML = `${day} ${date} ${month}`;

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `${hour}:${minutes}`;

function changeCelsius(){
    let currentCelsius = document.querySelector("#daily-temp");
    clickCelsius.addEventListener("click", changeCelsius);
currentCelsius.innerHTML = 22;
}

let clickCelsius = document.querySelector("#current-temp-celsius");
clickCelsius.addEventListener("click", changeCelsius);

function changeFarenheit(){
    let currentFarenheit = document.querySelector("#daily-temp");
    currentFarenheit.innerHTML = 70;
}
let clickFarenheit = document.querySelector("#current-temp-farenheit");
clickFarenheit.addEventListener("click", changeFarenheit);

let farenheitLink = document.querySelector("#fahrenheit-link");

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", changeCelsius);

  farenheitLink.addEventListener("click", changeFarenheit); 