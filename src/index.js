import header from './header';
import home from './home';
import menu from './menu';
import contact from './contact';


const container = document.querySelector('#content');
header(container);
const tabContent = document.querySelector('#tabContent');
home(tabContent);

const setTab = (callback) => {
  tabContent.innerHTML = '';
  callback(tabContent);
};

document.querySelector('#menu').addEventListener('click', () => { setTab(menu); });
document.querySelector('#contact').addEventListener('click', () => { setTab(contact); });
document.querySelector('#home').addEventListener('click', () => { setTab(home); });
