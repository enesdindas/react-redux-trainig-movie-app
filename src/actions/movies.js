import axios from 'axios';
import { API_BASE } from '../config/env';

export function fetchMovies(){
    return dispatch => {
        axios.get(`${API_BASE}/movies`)
        .then(result => console.log(result))
    }
}