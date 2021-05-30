import reducer from '../../app/reducers/index';


describe('Reducer', () => {

    let initialState;

    beforeEach(() => {
        initialState = {
            movies: [],
            loading: true,
            modalActive: false,
            modalActionType: '',
            isMovieInfoActive: false,
        }
    })


    it('should handle MOVIES_REQUESTED', () => {

        expect(reducer(undefined, {
            type: 'MOVIES_REQUESTED'
        })).toEqual({
            ...initialState,
            movies: [],
            loading: true
        });
    });

    it('should handle MOVIES_LOADED', () => {

        expect(reducer(undefined, {
            type: 'MOVIES_LOADED',
            payload: ['data'],

        })).toEqual({
            ...initialState,
            movies: ['data'],
            loading: false
        });
    })

    it('should handle MOVIE_CHOSEN', () => {

        initialState = {...initialState, loading: false, movies: [{id: 'mocked ID'}]}

        expect(reducer(initialState, {
            type: 'MOVIE_CHOSEN',
            id: 'mocked ID',
            modalActionType: 'mocked ActionType',
        })).toEqual({
            ...initialState,
            chosenMovieId: 'mocked ID',
            modalActionType: 'mocked ActionType',
            chosenMovieIndex: 0,
            modalActive: true,
        });
    })

    it('should handle MOVIE_REMOVE', () => {

        initialState = {...initialState, loading: false, movies: [{id: 'mocked ID'}], chosenMovieIndex: 0}

        expect(reducer(initialState, {
            type: 'MOVIE_REMOVE'
        })).toEqual({
            ...initialState,
            chosenMovieIndex: undefined,
            movies: []
        });
    })

    it('should handle MOVIE_REMOVE if action unlegal', () => {

        initialState = {...initialState, loading: false, movies: [{id: 'mocked ID'}], chosenMovieIndex: -1}

        expect(reducer(initialState, {
            type: 'MOVIE_REMOVE'
        })).toEqual({
            ...initialState,
            chosenMovieIndex: undefined,
            movies: [{id: 'mocked ID'}]
        });
    })

    it('should handle MOVIE_EDIT', () => {

        initialState = {...initialState, loading: false, movies: [{id: 'mocked ID'}], chosenMovieIndex: 0}

        expect(reducer(initialState, {
            type: 'MOVIE_EDIT',
            payload: {id: 'mocked ID1'}
        })).toEqual({
            ...initialState,
            chosenMovieIndex: 0,
            movies: [{id: 'mocked ID1'}]
        });
    })

    it('should handle MOVIE_ADD', () => {

        initialState = {...initialState, loading: false, movies: [{id: 'mocked ID'}], chosenMovieIndex: 0}

        expect(reducer(initialState, {
            type: 'MOVIE_ADD',
            payload: {id: 'mocked ID1'}
        })).toEqual({
            ...initialState,
            chosenMovieIndex: 0,
            movies: [{id: 'mocked ID'}, {id: 'mocked ID1'}]
        });
    })

    it('should handle DISABLE_MODAL', () => {

        initialState = {...initialState, loading: false, movies: [{id: 'mocked ID'}], chosenMovieIndex: 0}

        expect(reducer(initialState, {
            type: 'DISABLE_MODAL',
            payload: {id: 'mocked ID1'}
        })).toEqual({
            ...initialState,
            chosenMovieIndex: undefined,
            movies: [{id: 'mocked ID'}],
            modalActionType: null
        });
    })

    it('should handle CLEAR_MOVIE_INFO_PANEL', () => {

        initialState = {...initialState, loading: false, movies: [{id: 'mocked ID'}], chosenMovieIndex: undefined}

        expect(reducer(initialState, {
            type: 'CLEAR_MOVIE_INFO_PANEL',
            payload: {id: 'mocked ID1'}
        })).toEqual({
            ...initialState,
            chosenMovieIndex: undefined,
            movies: [{id: 'mocked ID'}],
            modalActionType: ''
        });
    })

    it('should handle SHOW_MOVIE_INFO', () => {

        initialState = {...initialState, loading: false, movies: [{id: 'mocked ID'}], chosenMovieIndex: undefined}

        expect(reducer(initialState, {
            type: 'SHOW_MOVIE_INFO',
            id: 'mocked ID'
        })).toEqual({
            ...initialState,
            isMovieInfoActive: true,
            movies: [{id: 'mocked ID'}],
            chosenMovieIndex: 0
        });
    })

    it('should handle SORT_MOVIES', () => {

        initialState = {...initialState, loading: false, movies: [{id: 'mocked ID'}], chosenMovieIndex: undefined}

        expect(reducer(initialState, {
            type: 'SORT_MOVIES',
            payload: [{id: 'mocked ID1'}]
        })).toEqual({
            ...initialState,
            movies: [{id: 'mocked ID1'}],
            chosenMovieIndex: undefined
        });
    })

    it('should handle FILTER_MOVIES all movies', () => {

        initialState = {...initialState, loading: false,
            hiddenMovies: [{id: 'mocked ID', genre: 'Action'}, {id: 'mocked ID1', genre: 'Adventure'}],
            chosenMovieIndex: undefined
        }

        expect(reducer(initialState, {
            type: 'FILTER_MOVIES',
            category: 'ALL'
        })).toEqual({
            ...initialState,
            movies: [{id: 'mocked ID', genre: 'Action'}, {id: 'mocked ID1', genre: 'Adventure'}],
            chosenMovieIndex: undefined
        });
    })

    it('should handle FILTER_MOVIES only Action', () => {

        initialState = {...initialState, loading: false, 
            movies: [{id: 'mocked ID', genre: 'Action'}, {id: 'mocked ID1', genre: 'Adventure'}, {id: 'mocked ID2', genre: 'Sci-Fi'}],
            chosenMovieIndex: undefined, hiddenMovies:undefined
        }

        expect(reducer(initialState, {
            type: 'FILTER_MOVIES',
            category: 'Action'
        })).toEqual({
            ...initialState,
            movies: [{id: 'mocked ID', genre: 'Action'}],
            chosenMovieIndex: undefined,
            hiddenMovies: initialState.movies
        });
    })

    it('should handle FILTER_MOVIES only Action and others movies are hidden', () => {

        initialState = {...initialState, loading: false, 
            hiddenMovies: [{id: 'mocked ID', genre: 'Action'}, {id: 'mocked ID1', genre: 'Adventure'}, {id: 'mocked ID2', genre: 'Sci-Fi'}],
            chosenMovieIndex: undefined
        }

        expect(reducer(initialState, {
            type: 'FILTER_MOVIES',
            category: 'Action'
        })).toEqual({
            ...initialState,
            movies: [{id: 'mocked ID', genre: 'Action'}],
            chosenMovieIndex: undefined,
            hiddenMovies: initialState.hiddenMovies
        });
    })
    
    it('should handle SEARCH_PANEL_INPUT_ON_CHANGE', () => {

        initialState = {...initialState, loading: false, movies: [{id: 'mocked ID'}], chosenMovieIndex: undefined}

        expect(reducer(initialState, {
            type: 'SEARCH_PANEL_INPUT_ON_CHANGE',
            payload: 'payload'
        })).toEqual({
            ...initialState,
            movies: [{id: 'mocked ID'}],
            chosenMovieIndex: undefined,
            searchPanelInputValue: 'payload'
        });
    })

    it('should handle Wrong event type', () => {

        initialState = {...initialState, loading: false, movies: [{id: 'mocked ID'}], chosenMovieIndex: undefined}

        expect(reducer(initialState, {
            type: 'Wrong type',
        })).toEqual({
            ...initialState,
        });
    })
})