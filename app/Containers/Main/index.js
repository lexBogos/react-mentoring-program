import React from "react";
import FilterPanel from "../../components/FilterPanel";
import MoviesList from "../../components/MoviesList";
import ErrorBoundary from "../../components/ErrorBoundary";
import "./index.scss";

const Main = () => (
  <div className="mainContainer">
    <FilterPanel />
    <ErrorBoundary>
      <MoviesList/>
    </ErrorBoundary>
  </div>
);

export default Main;
