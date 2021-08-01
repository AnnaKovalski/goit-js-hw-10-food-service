import './sass/main.scss';
import menuCards from './templates/cards.hbs';
import menu from './menu.json';

console.log(menuCards(menu[1]));

const refs = {
  control: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
  cardsContainer: document.querySelector('.js-menu'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const controlSwitch = refs.control;

controlSwitch.addEventListener('change', onSwitchThemeChange);

function onSwitchThemeChange(event) {
  if (event.currentTarget.checked === true) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function savedTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    controlSwitch.checked = true;
  }
}
savedTheme();

// =========================================MENU CARDS =================================

const cardsMarkup = createCardsMarkup(menu);

refs.cardsContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsMarkup(menu) {
  return menu.map(menuCards).join('');
}
