

const initialState = {
  title: '',
  poster: '',
  rating: null,
  movies: []
}

const SET_MOVIE_IFO = 'SET_MOVIE_INFO'

const UPDATE_MOVIE_LIST = 'UPDATE_MOVIE_LIST'

export const setMovieInfo = (title, poster, rating) => {
  return {
    type: SET_MOVIE_IFO,
    payload: {title, poster, rating}
  }
}

export const updateMovieList = movie => {
  return {
    type: UPDATE_MOVIE_LIST,
    payload: movie
  }
}

export default function(state= initialState, action){
  switch(action.type){
    case SET_MOVIE_IFO:
      return {...state, ...action.payload}
    case UPDATE_MOVIE_LIST:
    return {
      ...state,
      title: '',
      poster: '',
      rating: null,
      movies: [...state.movies, action.payload]
    }
    default:
      return state
  }
}


