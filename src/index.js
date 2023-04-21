/* eslint-disable no-use-before-define */
import './styles.css';
import Logo from './logo.png';

// Add Logo
const divLogo = document.querySelector('.logo');
const myLogo = new Image();
myLogo.src = Logo;
myLogo.classList.add('myLogo');
divLogo.append(myLogo);

const getShows = async () => {
  try {
    const response = await fetch('https://api.tvmaze.com/shows');
    let data = await response.json();
    data = data.slice(5, 11);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const cardsContainer = document.querySelector('.card-container');
let tvShows;
const loadData = async () => {
  const data = await getShows();
  tvShows = data;

  tvShows.forEach((cardInfo) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML += `<div class="card">
    <img class="cardImg" src="${cardInfo.image.original}" alt="">
    <div class="caption">
        <p class="name">${cardInfo.name}</p>
        <p class="likes">10 likes</p>
    </div>
    <div class="btn">
    <button id="comment_${cardInfo.id}" class="commentBtn" type="button">Comment</button>
    <button id="${cardInfo.id}" class="likeBtn" type="button">Like</button>
    </div>
</div>`;
    cardsContainer.appendChild(card);
    const commentButton = cardsContainer.querySelector(
      `#comment_${cardInfo.id}`,
    );
    commentButton.addEventListener('click', () => displayComent(cardInfo));
  });
};

loadData();

const displayComent = (cardInfo) => {
  const modal = document.getElementById('commentModal');
  const modalContent = document.getElementById('commentModalContent');
  const closeBtn = modal.querySelector('.close');
  modal.style.display = 'block';

  // eslint-disable-next-line func-names
  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };
  modalContent.innerHTML = `
      <div class="comment-pop-up">
        <div class="comment-image">
        <img src="${cardInfo.image.medium}" alt="Movie" />
        <i class="fa fa-close close" style="font-size:36px"></i>
        </div>
        <h3> ${cardInfo.name}</h3>
        <ul class="image-description">
         <li>weight: ${cardInfo.weight}</li>
         <li>premiered: ${cardInfo.premiered}</li>
         <li>time: 2hrs</li>
         <li>rate: 96%</li>
        </ul>
        <h4>Comments (4)</h4>
        <div class="comment-display">
          <ul>
            <li>03/11/2023 Alex: I'do love to buy it!</li>
            <li>25/12/2023 Prince: Wow!</li>
          </ul>
        </div>
        <h4>add a comments</h4>
        <form id="form" class="comment-form">
          <input type="text" name="text" id="txt" placeholder="Your name" />
          <textarea
            name="comments"
            placeholder="Write a message"
            maxlength="500"
            id="textarea"
            required=""
            spellcheck="false"
          ></textarea>
          <button type="submit" class="btn-list">Comment</button>
        </form>
      </div>`;

  // eslint-disable-next-line func-names
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
};