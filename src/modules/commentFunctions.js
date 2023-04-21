import commentsCounter from './commentsCounter.js';
import { baseUrl, involvementAppId } from './involvementApi.js';

const commentUrl = `${baseUrl}apps/${involvementAppId}/comments`;
const commentsList = document.querySelector('.comments-list');
const getComment = async (id) => {
  try {
    const response = await fetch(`${commentUrl}?item_id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const createComment = (item) => {
  const comment = document.createElement('li');
  comment.textContent = `${item.creation_date} ${item.username}: ${item.comment}`;
  commentsList.appendChild(comment);
};
const postComment = () => {
  const nameInput = document.querySelector('.name-input');
  const commentInput = document.querySelector('.comment-input');
  const submitCommentBtn = document.querySelector('.submit-comment-btn');
  const submitCommentHandler = async (e) => {
    e.preventDefault();
    const id = Number(e.target.id);
    const username = nameInput.value;
    const comment = commentInput.value;
    if (username && comment) {
      const data = { item_id: id, username, comment };
      fetch(commentUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(() => {
        nameInput.value = '';
        commentInput.value = '';
        getComment(id).then((arr) => {
          commentsList.innerHTML = '';
          if (arr.length > 0) {
            arr.forEach((item) => {
              createComment(item);
              commentsCounter();
            });
          }
        });
      });
    }
  };
  submitCommentBtn.addEventListener('click', submitCommentHandler);
};

export { postComment, getComment, createComment };