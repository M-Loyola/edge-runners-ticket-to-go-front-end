import {api} from './api'

export const getMovies = () => {
    return api.get('/movies');
}