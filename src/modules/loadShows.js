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
const loadShows = async () => {
  const data = await getShows();
  tvShows = data;

  tvShows.forEach((cardInfo) => {
    cardsContainer.innerHTML += `<div class="card">
      <img class="cardImg" src="${cardInfo.image.original}" alt="">
      <div class="caption">
          <p class="name">${cardInfo.name}</p>
          <p class="likes">10 likes</p>
      </div>
      <div class="btn">
      <button id="${cardInfo.id}" class="commentBtn" type="button">Comment</button>
      <button id="${cardInfo.id}" class="likeBtn" type="button">Like</button>
      </div>
  </div>`;
  });
};

export default loadShows;