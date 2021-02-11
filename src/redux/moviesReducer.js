

const initialState = {
  title: '',
  poster: '',
  rating: null,
  movies: []
}

const SET_MOVIE_IFO = 'SET_MOVIE_INFO'

export const setMovieInfo = (title, poster, rating) => {
  return {
    type: SET_MOVIE_IFO,
    payload: {title, poster, rating}
  }
}

export default function(state= initialState, action){
  switch(action.type){
    case SET_MOVIE_IFO:
      return {...state, ...action.payload}
    default:
      return state
  }
}


