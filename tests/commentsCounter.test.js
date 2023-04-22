import commentsCounter from './mocks/commentsCounterMock.js';

test('test comment counter', () => {
  document.body.innerHTML = `
    <h3 class="comments">Comments</h3>
    <ul class="comments-list">
      <li>Useless movie</li>
      <li>waste of time</li>
      <li>rubbish</li>
    </ul>
  `;

  const comments = document.querySelector('.comments');
  commentsCounter();
  expect(comments.textContent).toBe('Comments (3)');
});