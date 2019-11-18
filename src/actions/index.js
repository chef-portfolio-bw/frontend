import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// LOG IN ACTIONS
export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginUser = (username, password) => dispatch => {
    dispatch({ type: START_LOGIN });

    axios
        .post('')
        .then(res => {
            localStorage.setItem('token', res.data.access_token);
            dispatch({ type: LOGIN_SUCCESS });
            history.push('');
        })
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

// LOG OUT ACTIONS

export const START_LOGOUT = 'START_LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const logoutUser = () => dispatch => {
    dispatch({ type: START_LOGOUT });
    axiosWithAuth()
        .get('logout')
        .then(res => {
            localStorage.removeItem('token');

            dispatch({ type: LOGOUT_SUCCESS });
            history.push('')
        })
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
}

// FETCH THE CHEFS DATA 

export const FETCH_CHEFS_START = 'FETCH_CHEFS_START';
export const FETCH_CHEFS_SUCCESS = 'FETCH_CHEFS_SUCCESS';
export const FETCH_CHEFS_FAILURE = 'FETCH_CHEFS_FAILURE';

export const fetchChefs = () => dispatch => {
    dispatch({ type: FETCH_CHEFS_START });

    axios
        .get('')
        .then(res => dispatch({ type: FETCH_CHEFS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_CHEFS_FAILURE, payload: error.response }));
};

// POST THE NEW CHEF DATA

export const POST_CHEFS_START = 'POST_CHEFS_START';
export const POST_CHEFS_SUCCESS = 'POST_CHEFS_SUCCESS';
export const POST_CHEFS_FAILURE = 'POST_CHEFS_FAILURE';

export const postChefs = data = dispatch => {
    dispatch({ type: POST_CHEFS_START });

    axios
        .post('', data)
        .then(res => console.log('New Chef Post Created', res))
        .catch(err => dispatch({ type: POST_CHEFS_FAILURE, payload: error.response }));
};

export const START_DELETE_POST = 'START_DELETE_POST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

export const deletePost = id => dispatch => {
    dispatch({ type: START_DELETE_POST });

    axiosWithAuth()
        .delete(``)
        .then(res => dispatch({ type: DELETE_POST_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_POST_FAILURE, payload: err}));
};

export const START_EDIT_POST = 'START_EDIT_POST';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE';

export const editPost = id => dispatch => {
    dispatch({ type: START_EDIT_POST });

    axiosWithAuth() 
        .put(``)
        .then(res => dispatch({ type: EDIT_POST_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: EDIT_POST_FAILURE, payload: err }));
};