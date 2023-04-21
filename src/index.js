import './styles.css';
import Logo from './logo.png';
import getShows from './modules/tvMazeApi.js';
import { getLikes, addLike } from './modules/likes.js';
import displayShowsCounter from './modules/showsCounter.js';

// Add Logo to the header
const divLogo = document.querySelector('.logo');
const myLogo = new Image();
myLogo.src = Logo;
myLogo.classList.add('myLogo');
divLogo.append(myLogo);
let showsArray = [];
let likesArray = [];
const popup = (array) => {
  const commentBtns = document.querySelectorAll('.commentBtn');
  const commentPopup = document.querySelector('.comment-popup');
  const closeBtn = document.querySelector('.close-popup-btn');
  const comments = document.querySelector('.comments');
  commentBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const movieSummary = document.querySelector('.movie-summary');
      const movieTitle = document.querySelector('.movie-title');
      const popupPhoto = document.querySelector('.popup-photo');
      const submitCommentBtn = document.querySelector('.submit-comment-btn');
      const genre = document.querySelector('.genre');
      submitCommentBtn.setAttribute('id', index);
      commentPopup.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      popupPhoto.src = array[index].image.original;
      movieTitle.textContent = array[index].name;
      genre.textContent = array[index].genres.join(', ');
      movieSummary.innerHTML = array[index].summary;
    });
  });
  closeBtn.addEventListener('click', () => {
    commentPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
    comments.textContent = 'Comments';
  });
};

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
          <p class="likes" likes-id="${showInfo.id}">${movieLikes} ${movieLikes >= 1 ? 'likes' : 'like'}</p>
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
  popup(showsArray);
};

loadShows();
displayShowsCounter();