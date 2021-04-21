import React, {useEffect} from "react";
import SearchPanel from "../../components/SearchPanel";
import AddMovie from "../../components/AddMovie";
import MovieDetails from "../../components/MovieDetails";
import { withMovieStoreService } from "../../components/hoc";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  onModalDisable,
  clearMovieInfoPanel,
  onMovieChosen,
  onSearchPanelInputChange,
  showMovieInfoPanel,
} from "../../actions";
import "./index.scss";

const Header = ({
  movies,
  chosenMovieIndex,
  isMovieInfoActive,
  clearMovieInfoPanel,
  onMovieChosen,
  onSearchPanelInputChange,
  searchPanelInputValue,
  showMovieInfoPanel,
}) => {
  let location = useLocation();
  useEffect(() => {
  (() =>{
  if (location.pathname.length > 2) {
    const movieName = location.pathname.slice("/movie/".length);
    const movie = movies.find(
      e => e.title.toLowerCase() === movieName.toLowerCase()
    );
    if(movie && movie.id){
      showMovieInfoPanel(movie.id);
    }else{
      showMovieInfoPanel(null);
    }
  }
  })()
});
  return (
    <div className="headerContainer">
      <div className="headerImage"></div>
      {!isMovieInfoActive ? (
        <>
          <h1 className="title">Find your movie</h1>
          <AddMovie onMovieChosen={onMovieChosen} />
          <div className="searchContainer">
            <SearchPanel
              onSearchPanelInputChange={onSearchPanelInputChange}
              searchPanelInputValue={searchPanelInputValue}
            />
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

const mapStateToProps = ({
  movies,
  chosenMovieId,
  chosenMovieIndex,
  isMovieInfoActive,
  searchPanelInputValue,
}) => {
  return {
    movies,
    chosenMovieId,
    chosenMovieIndex,
    isMovieInfoActive,
    searchPanelInputValue,
  };
};

const mapDispatchToProps = {
  onModalDisable,
  clearMovieInfoPanel,
  onMovieChosen,
  onSearchPanelInputChange,
  showMovieInfoPanel,
};

export default withMovieStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);
