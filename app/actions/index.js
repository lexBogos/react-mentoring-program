const moviesLoaded = newMovies => {
    return {
        type: 'MOVIES_LOADED',
        payload: newMovies,

    }
};

const moviesRequested = () => {
    return {
        type: 'MOVIES_REQUESTED',
    }
};

const onMovieChosen = (id, modalActionType) => {
    return {
        type: 'MOVIE_CHOSEN',
        id: id,
        modalActionType: modalActionType
    }
};

const onMovieEdit = movieData => {
    return {
        type: 'MOVIE_EDIT',
        payload: movieData
    }
};

const onMovieRemove = id => {
    return {
        type: 'MOVIE_REMOVE',
        payload: id,
    }
};

const onMovieAdd = movieData => {
    return {
        type: 'MOVIE_ADD',
        payload: movieData
    }
};

const onModalDisable = () => {
    return {
        type: 'DISABLE_MODAL',
    }
};

const clearMovieInfoPanel = () => {
    return {
        type: 'CLEAR_MOVIE_INFO_PANEL',
    }
}

const showMovieInfoPanel = id => {
    return {
        type: 'SHOW_MOVIE_INFO',
        id: id
    }
}

const sortMovies = movies => {
    return {
        type: 'SORT_MOVIES',
        payload: movies
    }
}

const filterMovies = category => {
    return {
        type: 'FILTER_MOVIES',
        category: category
    }
}
 

export {
    moviesLoaded,
    moviesRequested,
    onMovieEdit,
    onMovieRemove,
    onMovieAdd,
    onMovieChosen,
    onModalDisable,
    clearMovieInfoPanel,
    showMovieInfoPanel,
    sortMovies,
    filterMovies,
};