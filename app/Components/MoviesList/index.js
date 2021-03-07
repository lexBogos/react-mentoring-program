import React from 'react';
import MovieCard from '../MovieCard';
import './index.scss';

const movies = [
    {
        title: 'Goodfellas',
        description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
        poster: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        id: 'tt0099685',
        year: 1990,
        type: 'Biography, Crime, Drama',
    },
    {
        title: 'The Matrix',
        description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
        poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY681_.jpg',
        id: 'tt0133093',
        year: 1999,
        type: 'Action, Sci-Fi',
    },
    {
        title: 'Terminator 2: Judgment Day',
        description: 'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son, John Connor, from a more advanced and powerful cyborg.',
        poster: 'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY403_.jpg',
        id: 'tt0103064',
        year: 1991,
        type: 'Action, Sci-Fi',
    },
    {
        title: 'Modern Times',
        description: 'The Tramp struggles to live in modern industrial society with the help of a young homeless woman.',
        poster: 'https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX578_.jpg',
        id: 'tt0027977',
        year: 1936,
        type: 'Comedy, Drama, Family',
    },
    {
        title: 'Memento',
        description: `A man with short-term memory loss attempts to track down his wife's murderer.`,
        poster: 'https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY218_.jpg 148w, https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY327_.jpg 222w, https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY408_.jpg 277w, https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1022_.jpg 1022w',
        id: 'tt0209144',
        year: 2000,
        type: 'Mystery, Thriller',
    },
    {
        title: 'Dune',
        description: `Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.`,
        poster: 'https://m.media-amazon.com/images/M/MV5BMGFkZGY0NTgtMGEyZC00YzhjLTkyOWItYzMzOTljMDA3ZjU2XkEyXkFqcGdeQXVyNzc4NTU3Njg@._V1_.jpg',
        id: 'tt1160419',
        year: 2021,
        type: 'Adventure, Drama, Sci-Fi',
    },  
]


const MoviesList = () =>
    <div className='movieList'>
        {movies.map(movie => (<MovieCard  
                 title={movie.title}
                 description={movie.description} 
                 key={movie.id}
                 poster={movie.poster}
                 year={movie.year}
                 type={movie.type}
        />))};
    </div>


export default MoviesList;