import React, {useState} from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Modal from '../../Components/Modal'


const movies = [
    {
        title: 'Goodfellas',
        description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
        movieUrl: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        id: 'tt0099685',
        realiseDate: 1990,
        genre: 'Biography, Crime, Drama',
    },
    {
        title: 'The Matrix',
        description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
        movieUrl: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY681_.jpg',
        id: 'tt0133093',
        realiseDate: 1999,
        genre: 'Action, Sci-Fi',
    },
    {
        title: 'Terminator 2: Judgment Day',
        description: 'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son, John Connor, from a more advanced and powerful cyborg.',
        movieUrl: 'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY403_.jpg',
        id: 'tt0103064',
        realiseDate: 1991,
        genre: 'Action, Sci-Fi',
    },
    {
        title: 'Modern Times',
        description: 'The Tramp struggles to live in modern industrial society with the help of a young homeless woman.',
        movieUrl: 'https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX578_.jpg',
        id: 'tt0027977',
        realiseDate: 1936,
        genre: 'Comedy, Drama, Family',
    },
    {
        title: 'Memento',
        description: `A man with short-term memory loss attempts to track down his wife's murderer.`,
        movieUrl: 'https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY218_.jpg 148w, https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY327_.jpg 222w, https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY408_.jpg 277w, https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1022_.jpg 1022w',
        id: 'tt0209144',
        realiseDate: 2000,
        genre: 'Mystery, Thriller',
    },
    {
        title: 'Dune',
        description: `Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.`,
        movieUrl: 'https://m.media-amazon.com/images/M/MV5BMGFkZGY0NTgtMGEyZC00YzhjLTkyOWItYzMzOTljMDA3ZjU2XkEyXkFqcGdeQXVyNzc4NTU3Njg@._V1_.jpg',
        id: 'tt1160419',
        realiseDate: 2021,
        genre: 'Adventure, Drama, Sci-Fi',
    },  
  ]


const App = () => {
    const [movieList, movieListHook] = useState(movies);
    const [modalActive, setModalActive] = useState(false);
    const [modalFields, setModalFields] = useState({func: () => {}});
    return <>
        <Header setModalActive={setModalActive}
                setModalFields={setModalFields}
                />
        <Main movieList = {movieList}
              setModalActive={setModalActive}
              setModalFields={setModalFields}
              movieListHook={movieListHook}
                />
        <Footer/>
        <Modal active = {modalActive}
               setActive = {setModalActive}
               fields = {modalFields}
               movieListHook = {movieListHook}
               movieList = {movieList} />
    </>
}



export default App;