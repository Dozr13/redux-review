import {createStore} from 'redux'
import moviesReducer from './redux/moviesReducer'

export default createStore(moviesReducer)