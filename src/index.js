import './reset.css';
import './styles.css';

const key = 'f95e40c94a03a4ec0328c71ffffc2eae';
const root = document.querySelector(':root');
const body = document.querySelector('body');

function createElement(type, className = '', content = '') {
  const element = document.createElement(type);
  element.setAttribute('class', className);
  if (type == 'img') {
    element.src = content;
  } else {
    element.textContent = content;
  }
  return element;
}

function setInnerHeight() {
  root.style.setProperty('--innerHeight', window.innerHeight + 'px');
}
function setInnerWidth() {
  root.style.setProperty('--innerWidth', window.innerWidth + 'px');
}
window.addEventListener('resize', () => {
  setInnerHeight();
  setInnerWidth();
});
setInnerHeight();
setInnerWidth();

// search UI
const form = createElement('form');
const searchContainer = createElement('div', 'search-container');
const searchIcon = createElement('img', 'search-icon');
const searchInput = createElement('input', 'search-input');
searchInput.setAttribute('placeholder', 'Search for a city...');
const submit = createElement('input', 'submit');
submit.setAttribute('type', 'submit');
submit.setAttribute('style', 'display:none');
const errorMessage = createElement('div', 'error-message');
form.append(searchContainer);
searchContainer.append(searchIcon, searchInput, errorMessage);

body.append(form);

// data UI
const contentContainer = createElement('div', 'content-container');
const locationLabel = createElement('div', 'location-label');
const temperatureLabel = createElement('div', 'temperature-label');
const temperatureMaxLabel = createElement('div', 'temperature-max-label');
const temperatureMinLabel = createElement('div', 'temperature-min-label');
const humidityLabel = createElement('div', 'humidity-label');
const pressureLabel = createElement('div', 'pressure-label');
contentContainer.append(
  locationLabel,
  temperatureLabel,
  temperatureMaxLabel,
  temperatureMinLabel,
  humidityLabel,
  pressureLabel
);

body.append(contentContainer);

// display
function display(location, data) {
  contentContainer.classList.add('active');
  searchContainer.classList.add('display-active');

  searchInput.value = '';
  errorMessage.classList.remove('active');

  locationLabel.textContent = location;
  temperatureLabel.textContent = kelvinToFahrenheit(data.temp);
  temperatureMaxLabel.textContent = kelvinToFahrenheit(data.temp_max);
  temperatureMinLabel.textContent = kelvinToFahrenheit(data.temp_min);
}

function kelvinToFahrenheit(n) {
  return Math.round(((n - 273.15) * 9) / 5 + 32);
}

// loading icon
const loadingIcon = createElement('div', 'lds-ellipsis');
loadingIcon.innerHTML = '<div></div><div></div><div></div><div></div>';

body.append(loadingIcon);

// form handling
async function retrieveData(search) {
  loadingIcon.classList.add('active');
  try {
    const coordinatesResponse = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=${key}`
    );
    const coordinatesData = await coordinatesResponse.json();
    try {
      const latitude = coordinatesData[0].lat;
      const longitude = coordinatesData[0].lon;
      try {
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
        );
        const weatherData = await weatherResponse.json();
        display(weatherData.name, weatherData.main);
        loadingIcon.classList.remove('active');
      } catch {
        errorMessage.classList.add('active');
        errorMessage.textContent = 'Request failed';
        loadingIcon.classList.remove('active');
      }
    } catch {
      errorMessage.classList.add('active');
      errorMessage.textContent = 'Location not found';
      loadingIcon.classList.remove('active');
    }
  } catch (error) {
    errorMessage.classList.add('active');
    errorMessage.textContent = 'Request failed';
    loadingIcon.classList.remove('active');
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  errorMessage.textContent = '';
  retrieveData(searchInput.value);
});
