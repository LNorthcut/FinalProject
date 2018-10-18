import axios from "axios";
// const apikey = process.env.APIKEY
// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }

  // getMovieInfo: movie => {
  //   return axios.get(`http://www.omdbapi.com/?t=${movie}&apikey=${apikey}`)
  //                     //http://www.omdbapi.com/?ninja+turtles&apikey=1583abndjak
  // }
};
