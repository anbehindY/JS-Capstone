const commentsCounter = () => {
  const commentsList = document.querySelector('.comments-list');
  const comments = document.querySelector('.comments');
  const length = commentsList.childElementCount;
  comments.textContent = `Comments (${length})`;
};

export default commentsCounter;