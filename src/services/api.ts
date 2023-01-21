import axios from 'axios';

export type Movie = {
  
  id: string;
  image: string;
  title: string;
  description: string;
  runtimeStr: string
  genres: string;
  genreList: Object[];
  contentRating: string,
  imDbRating: string,
  imDbRatingVotes: string,
  metacriticRating: string,
  plot: string,
  stars: string,
  starList: object[],
};

export type ApiClient = {
  getMovies: () => any;
};


export const createApiClient = (): ApiClient => {
  return {
    getMovies: async () => {
      try {
        const movies = await axios.get('https://cyan-gorgeous-cygnet.cyclic.app/api/all-movies?key=jedimindtrick&count=250')
        return movies
      } catch (error) {
        throw error
      }
    }
   
  };
};

