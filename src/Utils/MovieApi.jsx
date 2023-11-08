import axios from "axios";

const movieUrl = "https://api.themoviedb.org/3/";
const api_key = "2780c3a3d29210f5c4d269f9dc70a490";

const getTrendingVideos = () => {
  return axios.get(movieUrl + "trending/all/day?api_key=" + api_key);
};

export default {
  getTrendingVideos,
}; 

