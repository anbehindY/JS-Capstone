import { baseUrl, involvementAppId } from './involvementApi.js';

const getLikes = async () => {
  try {
    const response = await fetch(`${baseUrl}apps/${involvementAppId}/likes`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateLikes = async () => {
  const likeTexts = document.querySelectorAll('.likes');
  const likes = await getLikes();

  likeTexts.forEach((likeText) => {
    let movieLikes = 0;
    if (likes.find((like) => like.item_id === Number(likeText.getAttribute('likes-id')))) {
      movieLikes = likes.find((like) => like.item_id === Number(likeText.getAttribute('likes-id'))).likes;
    }
    likeText.textContent = `${movieLikes} ${movieLikes > 1 ? 'likes' : 'like'}`;
  });
};

const addLike = async (id) => {
  const response = await fetch(`${baseUrl}apps/${involvementAppId}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  Promise.resolve(response);
  updateLikes();
};

export { getLikes, updateLikes, addLike };