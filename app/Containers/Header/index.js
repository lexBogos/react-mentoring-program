import React from "react";
import SearchPanel from "../../Components/SearchPanel";
import AddMovie from "../../Components/AddMovie";
import MovieDetails from '../../Components/MovieDetails';
import "./index.scss";

const addMovieModalFields = (hook, list, setActive) => {
  const movieObj = {
    title: "",
    realiseDate: "",
    movieUrl: "",
    genre: "sci-fi",
    overview: "",
    runTime: "",
  };

  return (
    <div className="addMovie">
      <h3>Add Movie</h3>
      <div>
        <span>TITLE</span>
        <input
          onChange={(event) => {
            movieObj.title = event.target.value;
          }}
        ></input>
      </div>
      <div>
        <span>RELEASE DATE</span>
        <input
          onChange={(event) => {
            movieObj.realiseDate = event.target.value;
          }}
        ></input>
      </div>
      <div>
        <span>MOVIE URL</span>
        <input
          onChange={(event) => {
            movieObj.movieUrl = event.target.value;
          }}
        ></input>
      </div>
      <div>
        <span>GENRE</span>
        <select
          name="genre"
          id="genre"
          onChange={(event) => {
            movieObj.genre = event.target.value;
          }}
        >
          <option value="sci-fi">Sci-Fi</option>
          <option value="thriller">Thriller</option>
          <option value="action">Action</option>
        </select>
      </div>
      <div>
        <span>OVERVIEW</span>
        <input
          onChange={(event) => {
            movieObj.overview = event.target.value;
          }}
        ></input>
      </div>
      <div>
        <span>RUNTIME</span>
        <input
          onChange={(event) => {
            movieObj.runTime = event.target.value;
          }}
        ></input>
      </div>
      <div className="modalButton">
        <button
          onClick={() => {
            setActive(false);
          }}
        >
          RESET
        </button>
        <button
          onClick={() => {
            hook([...list, { ...movieObj, id: list.length }]);
            setActive(false);
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

const Header = ({ setModalActive, setModalFields, choosenMovie, setChoosenMovie, movieList }) => {

  return (
    <div className="headerContainer">
      <div className="headerImage"></div>
      {choosenMovie === -1 ? (
        <>
          <h1 className="title">Find your movie</h1>
          <AddMovie
            setModalFields={setModalFields}
            func={addMovieModalFields}
            setModalActive={setModalActive}
          />
          <div className="searchContainer">
            <SearchPanel />
          </div>
        </>
      ) : (
        <>
            <MovieDetails choosenMovie={choosenMovie} setChoosenMovie={setChoosenMovie} movieList={movieList}/>
        </>
      )}
    </div>
  );
};

export default Header;