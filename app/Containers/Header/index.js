import React from "react";
import SearchPanel from "../../components/SearchPanel";
import AddMovie from "../../components/AddMovie";
import MovieDetails from '../../components/MovieDetails';
import { withMovieStoreService } from '../../components/hoc'
import { connect } from 'react-redux';
import { onModalDisable, clearMovieInfoPanel, onMovieChosen } from '../../actions';
import "./index.scss";

const Header = ({ movies, chosenMovieIndex, isMovieInfoActive, clearMovieInfoPanel, onMovieChosen }) => {
  return (
    <div className="headerContainer">
      <div className="headerImage"></div>
      {!isMovieInfoActive ? (
        <>
          <h1 className="title">Find your movie</h1>
          <AddMovie onMovieChosen={onMovieChosen}
          />
          <div className="searchContainer">
            <SearchPanel />
          </div>
        </>
      ) : (
        <>
            <MovieDetails 
              movie={movies[chosenMovieIndex]}
              clearMovieInfoPanel={clearMovieInfoPanel}
            />
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ movies, chosenMovieId, chosenMovieIndex, isMovieInfoActive }) => {
  return {
    movies,
    chosenMovieId,
    chosenMovieIndex,
    isMovieInfoActive,
  }
};

const mapDispatchToProps = {  onModalDisable, clearMovieInfoPanel, onMovieChosen };

export default withMovieStoreService()(connect(mapStateToProps, mapDispatchToProps)(Header));