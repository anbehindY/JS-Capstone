import getShows from './tvMazeApi.js';

const countItems = async () => {
  const response = await getShows();
  return response.length;
};

const displayShowsCounter = async () => {
  const counts = await countItems();
  const showsCount = document.querySelector('.showsCount');
  showsCount.innerHTML = `TV Shows (${counts})`;
};

export default displayShowsCounter;