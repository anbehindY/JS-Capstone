const commentsCounter = () => {
  const commentsList = document.querySelector('.comments-list');
  const comments = document.querySelector('.comments');
  const totalComment = commentsList.childElementCount;
  comments.textContent = `Comments (${totalComment})`;
};

export default commentsCounter;