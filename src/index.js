import './styles.css';
import Logo from './logo.png';
import loadShows from './modules/loadShows.js';

// Add Logo to the header
const divLogo = document.querySelector('.logo');
const myLogo = new Image();
myLogo.src = Logo;
myLogo.classList.add('myLogo');
divLogo.append(myLogo);

loadShows();
