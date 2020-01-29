import header from './header';
import home from './home';
import menu from './menu';
import contact from './contact';


let container = document.querySelector('#content');
header(container);
let tabContent = document.querySelector('#tabContent');
home(tabContent);

let setTab = (callback) => {
  tabContent.innerHTML = '';
  callback(tabContent);
}

document.querySelector("#menu").addEventListener('click', function(){ setTab(menu);});
document.querySelector("#contact").addEventListener('click', function(){ setTab(contact);});
document.querySelector("#home").addEventListener('click', function(){ setTab(home);});