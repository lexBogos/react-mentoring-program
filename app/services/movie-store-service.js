//API MOCKED HERE
const API_MOCKED = true;
const URL =  'http://localhost:4000/'

export default class MovieStoreService {
    constructor(){this.data = [
        {
            title: 'Goodfellas',
            description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
            movieUrl: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            id: 'tt0099685',
            realiseDate: 1990,
            genre: 'Biography, Crime, Drama',
            rate: 4.9
        },
        {
            title: 'The Matrix',
            description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
            movieUrl: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY681_.jpg',
            id: 'tt0133093',
            realiseDate: 1999,
            genre: 'Action, Sci-Fi',
            rate: 5
        },
        {
            title: 'Terminator 2: Judgment Day',
            description: 'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son, John Connor, from a more advanced and powerful cyborg.',
            movieUrl: 'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY403_.jpg',
            id: 'tt0103064',
            realiseDate: 1991,
            genre: 'Action, Sci-Fi',
            rate: 5
        },
        {
            title: 'Modern Times',
            description: 'The Tramp struggles to live in modern industrial society with the help of a young homeless woman.',
            movieUrl: 'https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX578_.jpg',
            id: 'tt0027977',
            realiseDate: 1936,
            genre: 'Comedy, Drama, Family',
            rate: 4.2
        },
        {
            title: 'Memento',
            description: `A man with short-term memory loss attempts to track down his wife's murderer.`,
            movieUrl: 'https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY218_.jpg 148w, https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY327_.jpg 222w, https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY408_.jpg 277w, https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1022_.jpg 1022w',
            id: 'tt0209144',
            realiseDate: 2000,
            genre: 'Mystery, Thriller',
            rate: 4
        },
        {
            title: 'Dune',
            description: `Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.`,
            movieUrl: 'https://m.media-amazon.com/images/M/MV5BMGFkZGY0NTgtMGEyZC00YzhjLTkyOWItYzMzOTljMDA3ZjU2XkEyXkFqcGdeQXVyNzc4NTU3Njg@._V1_.jpg',
            id: 'tt1160419',
            realiseDate: 2021,
            genre: 'Adventure, Drama, Sci-Fi',
            rate: 3.8
        },  
      ]};
    getMovies() {
      if (API_MOCKED){
        return new Promise(res=>{setTimeout(()=>{res(this.data)}, 500)});
      }
      return fetch(URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', accept: 'application/json' },
      })
    }
    updateMovieData({movieId, movieData}) {
        if (API_MOCKED){
            return new Promise(res=>{setTimeout(()=>{res('OK')}, 500)});
          }
          return fetch(`${URL}${movieId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', accept: 'application/json' },
            body: JSON.stringify(movieData),
          })
    }
    removeMovie({movieId}) {
        if (API_MOCKED){
            return new Promise(res=>{setTimeout(()=>{res('OK')}, 500)});
          }
          return fetch(`${URL}${movieId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', accept: 'application/json' },
          })
    }
    addMovie({movieData}) {
        if (API_MOCKED){
            return new Promise(res=>{setTimeout(()=>{res('OK')}, 500)});
          }
          return fetch(URL, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', accept: 'application/json' },
            body: JSON.stringify(movieData),
          })
    }
  }