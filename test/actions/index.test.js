import {moviesLoaded,
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
        onSearchPanelInputChange 
} from '../../app/actions/index';

describe('Actions', () => {

        it('Methods:',  () => {
            expect(moviesLoaded('newMovies')).toEqual({
                type: 'MOVIES_LOADED',
                payload: 'newMovies',
            });
            expect(moviesRequested()).toEqual({
                type: 'MOVIES_REQUESTED'
            });
            expect(onMovieChosen('id', 'modalActionType')).toEqual({
                type: 'MOVIE_CHOSEN',
                id: 'id',
                modalActionType: 'modalActionType'
            });
            expect(onMovieEdit('movieData')).toEqual({
                type: 'MOVIE_EDIT',
                payload: 'movieData'
            });
            expect(onMovieRemove('id')).toEqual({
                type: 'MOVIE_REMOVE',
                payload: 'id'
            });
            expect(onMovieAdd('movieData')).toEqual({
                type: 'MOVIE_ADD',
                payload: 'movieData'
            });
            expect(onModalDisable()).toEqual({
                type: 'DISABLE_MODAL',
            });
            expect(clearMovieInfoPanel()).toEqual({
                type: 'CLEAR_MOVIE_INFO_PANEL',
            });
            expect(showMovieInfoPanel('id')).toEqual({
                type: 'SHOW_MOVIE_INFO',
                id: 'id'
            });
            expect(sortMovies('movies')).toEqual({
                type: 'SORT_MOVIES',
                payload: 'movies'
            });
            expect(filterMovies('category')).toEqual({
                type: 'FILTER_MOVIES',
                category: 'category'
            });
            expect(onSearchPanelInputChange('inputValue')).toEqual({
                type: 'SEARCH_PANEL_INPUT_ON_CHANGE',
                payload: 'inputValue'
            });
        });
        
})