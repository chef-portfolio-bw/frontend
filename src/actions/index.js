import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import history from '../history/history';

// LOG IN ACTIONS
export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginUser = (username, password) => dispatch => {
    dispatch({ type: START_LOGIN });

    axiosWithAuth()
        .post('https://chef-portfoliosis.herokuapp.com/api/auth/login', {
            username: username,
            password: password
        })
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS });
            history.push('/');
        })
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

// REGISTER ACTIONS

export const START_REGISTER = 'START_REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const registerUser = newUser => dispatch => {
    dispatch({ type: START_REGISTER });
    axios
        .post('https://chef-portfoliosis.herokuapp.com/api/auth/register', newUser)
        .then(res => {
            localStorage.setItem('token', res.data.access_token);

            dispatch({ type: REGISTER_SUCCESS });
            history.push('/');
        })
        .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }));
}

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
            history.push('/login')
        })
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
}

// FETCH THE CHEFS DATA 

export const FETCH_POSTS_START = 'FETCH_CHEFS_START';
export const FETCH_POSTS_SUCCESS = 'FETCH_CHEFS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_CHEFS_FAILURE';

export const fetchChefs = () => dispatch => {
    dispatch({ type: FETCH_POSTS_START });

    axios
        .get('/api/posts/all')
        .then(res => dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_POSTS_FAILURE, payload: err.response }));
};

// POST THE NEW CHEF DATA

export const POST_CHEFS_START = 'POST_CHEFS_START';
export const POST_CHEFS_SUCCESS = 'POST_CHEFS_SUCCESS';
export const POST_CHEFS_FAILURE = 'POST_CHEFS_FAILURE';

export const postChefs = data => dispatch => {
    dispatch({ type: POST_CHEFS_START });

    axiosWithAuth()
        .post('/api/posts/', data)
        .then(res => dispatch({ type: POST_CHEFS_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: POST_CHEFS_FAILURE, payload: err.response }));
};

export const START_DELETE_POST = 'START_DELETE_POST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

export const deletePost = id => dispatch => {
    dispatch({ type: START_DELETE_POST });

    axiosWithAuth()
        .delete(`/api/posts/${id}`)
        .then(res => dispatch({ type: DELETE_POST_SUCCESS, payload: id }))
        .catch(err => dispatch({ type: DELETE_POST_FAILURE, payload: err}));
};

export const START_EDIT_POST = 'START_EDIT_POST';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE';

export const editPost = (id, data) => dispatch => {
    dispatch({ type: START_EDIT_POST });

    axiosWithAuth() 
        .put(`/api/posts/${id}`, data)
        .then(res => dispatch({ type: EDIT_POST_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: EDIT_POST_FAILURE, payload: err }));
};