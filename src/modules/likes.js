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

export default getLikes;