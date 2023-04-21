import './styles.css';
import Logo from './logo.png';
import getShows from './modules/tvMazeApi.js';
import { addLike, getLikes } from './modules/likes.js';

// Add Logo to the header
const divLogo = document.querySelector('.logo');
const myLogo = new Image();
myLogo.src = Logo;
myLogo.classList.add('myLogo');
divLogo.append(myLogo);

let showsArray = [];
let likesArray = [];
const cardsContainer = document.querySelector('.card-container');
const loadShows = async () => {
  const showData = await getShows();
  const likeData = await getLikes();
  showsArray = showData;
  likesArray = likeData;

  showsArray.forEach((showInfo) => {
    let movieLikes = 0;
    if (likesArray.find((like) => like.item_id === showInfo.id)) {
      movieLikes = likesArray.find((like) => like.item_id === showInfo.id).likes;
    }
    cardsContainer.innerHTML += `<div class="card">
      <img class="cardImg" src="${showInfo.image.original}" alt="${showInfo.name}">
      <div class="caption">
          <p class="name">${showInfo.name}</p>
          <small class="likes" likes-id="${showInfo.id}">${movieLikes} ${movieLikes > 1 ? 'likes' : 'like'}</small>
      </div>
      <div class="btn">
      <button id="${showInfo.id}" class="commentBtn" type="button">Comment</button>
      <button id="${showInfo.id}" class="likeBtn" show-id="${showInfo.id}" type="button">Like</button>
      </div>
  </div>`;
    const likeBtns = document.querySelectorAll('.likeBtn');
    likeBtns.forEach((likeBtn) => {
      likeBtn.addEventListener('click', () => {
        addLike(Number(likeBtn.getAttribute('show-id')));
      });
    });
  });
};
loadShows();
