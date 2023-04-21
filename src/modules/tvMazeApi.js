const getShows = async () => {
  try {
    const response = await fetch('https://api.tvmaze.com/shows');
    let data = await response.json();
    data = data.slice(0, 21);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default getShows;
