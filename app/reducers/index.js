
const initialState = {
    movies: [],
    loading: true,
    modalActive: false,
    modalActionType:'',
    isMovieInfoActive: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'MOVIES_REQUESTED':
            return {
                movies: [],
                loading: true
            }
        case 'MOVIES_LOADED':
            return {
                movies: action.payload,
                loading: false
            }
        case 'MOVIE_CHOSEN':
                return {
                    ...state,
                    modalActive: true, 
                    chosenMovieId: action.id,
                    chosenMovieIndex: state.movies.findIndex(e =>  e.id === action.id),
                    modalActionType: action.modalActionType
                }
        case 'MOVIE_REMOVE':
            return (() => {
                const moviesCopy = JSON.parse(JSON.stringify(state.movies));
                const isRemoveLegal = state.chosenMovieIndex >= 0 ? 1 : 0;
                moviesCopy.splice(state.chosenMovieIndex, isRemoveLegal);
                return {
                    ...state,
                    movies: moviesCopy,
                    chosenMovieIndex: undefined,
                } 
            })(); 
                   
        case 'MOVIE_EDIT':
            const moviesCopy = JSON.parse(JSON.stringify(state.movies));
            moviesCopy[state.chosenMovieIndex] = action.payload;
            return {
                ...state,
                movies: moviesCopy,
            }
        
        case 'MOVIE_ADD':
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }    

        case 'DISABLE_MODAL':
            return {
                ...state,
                chosenMovieIndex: undefined,
                modalActive: false,
                modalActionType: null
            }
        case 'CLEAR_MOVIE_INFO_PANEL':
            return {
                ...state,
                isMovieInfoActive: false,
            }
        
        case 'SHOW_MOVIE_INFO': {
            return {
               ...state,
               isMovieInfoActive: true,
               chosenMovieIndex: state.movies.findIndex(e =>  e.id === action.id),
            }
        }

        case 'SORT_MOVIES':{
            return {
                ...state,
                movies: action.payload,
            }
        }

        case 'FILTER_MOVIES':{
            if(action.category === 'ALL'){
                return {...state, movies: state.hiddenMovies}
            }

            const allMovies = state.hiddenMovies ? state.hiddenMovies : state.movies;

            const filteredResult =  allMovies.filter(e=>{
                if(e.genre.toLowerCase().indexOf(action.category.toLowerCase()) >= 0){
                    return true
                }
            });
           
            return {
                ...state,
                movies: filteredResult,
                hiddenMovies: state.hiddenMovies || state.movies
            }
        }

        default:
            return state;   
    }    
}

export default reducer;