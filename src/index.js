import './reset.css';
import './styles.css';

import MOUNTAINS_IMAGE from './assets/mountains.jpg';

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

const background = createElement('img', 'background', MOUNTAINS_IMAGE);

const form = createElement('form');
const searchContainer = createElement('div', 'search-container');
const searchIcon = createElement('img', 'search-icon');
const searchInput = createElement('input', 'search-input');
searchInput.setAttribute('placeholder', 'Search for a city...');
const submit = createElement('input', 'submit');
submit.setAttribute('type', 'submit');
submit.setAttribute('style', 'display:none');
form.append(searchContainer);
searchContainer.append(searchIcon, searchInput);

body.append(background, form);
