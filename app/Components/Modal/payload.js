import React from 'react';

const EditMovieModalFields = ({onMovieEdit, onModalDisable, data, movieStoreService}) => {
    const movieObj = {
        id: data.id,
        title: data.title,
        realiseDate: data.realiseDate,
        movieUrl: data.movieUrl,
        genre: data.genre,
        overview: '',
        runTime: ''
    }

    return <div className = 'addMovie'>
    <h3>Edit Movie</h3>
    <div>
        <span>TITLE</span>
        <input defaultValue={data.title} onChange={(event) => {movieObj.title = event.target.value}}></input>
    </div>
    <div>
        <span>RELEASE DATE</span>
        <input defaultValue={data.realiseDate} onChange={(event) => {movieObj.realiseDate = event.target.value}}></input>
    </div>
    <div>
        <span>MOVIE URL</span>
        <input defaultValue={data.movieUrl} onChange={(event) => {movieObj.movieUrl = event.target.value}}></input>
    </div>
    <div>
        <span>GENRE</span>
        <select name="genre" id="genre" onChange={(event) => {movieObj.genre = event.target.value}}>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="action">Action</option>
        </select>
    </div>
    <div>
        <span>OVERVIEW</span>
        <input onChange={(event) => {data.overview = event.target.value}}></input>
    </div>
    <div>
        <span>RUNTIME</span>
        <input onChange={(event) => {data.runTime = event.target.value}}></input>
    </div>
    <div className='modalButton'>
        <button onClick={() => {onModalDisable()}}>RESET</button>
        <button onClick={() => {
            movieStoreService.updateMovieData({movieId: movieObj.id, movieData: movieObj}).then((res)=>{console.log(res)});
            onMovieEdit(movieObj);
        }}>SAVE</button>
    </div>
</div>
};

const DeleteMovieModalFields = ({onMovieRemove, chosenMovieId, movieStoreService}) => {
    return <div className = 'addMovie'>
    <h3>Delete Movie</h3>
    <div>
        <span>Are you sure want to delete this movie ?</span>
    </div>
    <div className='modalButton'>
        <button onClick={() => {
            movieStoreService.removeMovie({movieId: chosenMovieId}).then((res)=>{console.log(res)});
            onMovieRemove(chosenMovieId);
        }}>CONFIRM</button>
    </div>
</div>
};

const AddMovieModalFields = ({onMovieAdd, movieStoreService}) => {
    const movieObj = {
      id: Math.round(Math.random()*1000000000)+'', //Replace with UUID
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
              onModalDisable()
            }}
          >
            RESET
          </button>
          <button
            onClick={() => {
              movieStoreService.addMovie({movieData: movieObj}).then((res)=>{console.log(res)});
              onMovieAdd(movieObj)
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    );
  };

export {
    AddMovieModalFields,
    EditMovieModalFields,
    DeleteMovieModalFields,
};