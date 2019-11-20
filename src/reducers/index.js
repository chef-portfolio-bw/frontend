import {
    START_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    START_REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    START_LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    FETCH_CHEFS_START,
    FETCH_CHEFS_SUCCESS,
    FETCH_CHEFS_FAILURE,
    POST_CHEFS_START,
    POST_CHEFS_SUCCESS,
    POST_CHEFS_FAILURE,
    START_DELETE_POST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE,
    START_EDIT_POST,
    EDIT_POST_SUCCESS,
    EDIT_POST_FAILURE
} from '../actions';


const initialState = {
    isLogging: false,
    isEditing: false,
    isLoggingOut: false,
    isRegistering: false,
    isDeleting: false,
    isFetching: false,
    isPosting: false,
    errorLogin: null,
    errorLogout: null,
    errorPosting: null,
    errorDeleting: null,
    errorFetching: null,
    errorEditing: null,
    errorRegistering: null,
    userLogged: false,
    chefPosts: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOGIN:
            return {...state, errorLogin: null, isLogging: true};
        case LOGIN_SUCCESS: 
            return {...state, isLogging: false, userLogged: true};
        case LOGIN_FAILURE: 
            return {...state, errorLogin: action.payload, isLogging: false};

        case START_REGISTER:
            return {...state, errorRegistering: null, isRegistering: true};
        case REGISTER_SUCCESS:
            return {...state, isRegistering: false, userLogged: true};
        case REGISTER_FAILURE:
            return {...state, errorRegistering: action.payload, isRegistering: false};

        case START_LOGOUT:
            return {...state, errorLogout: null, isLoggingOut: true};
        case LOGOUT_SUCCESS: 
            return {...state, isLoggingOut: false, userLogged: false};
        case LOGOUT_FAILURE:
            return {...state, errorLogout: action.payload, isLoggingOut: false};

        case FETCH_CHEFS_START: 
            return {...state, errorFetching: null, isFetching: true};
        case FETCH_CHEFS_SUCCESS:
            return {...state, isFetching: false, chefPosts: action.payload};
        case FETCH_CHEFS_FAILURE:
            return {...state, errorFetching: action.payload, isFetching: false};

        case POST_CHEFS_START:
            return {...state, errorPosting: null, isPosting: true};
        case POST_CHEFS_SUCCESS:
            return {...state, isPosting: false, chefPosts: action.payload};
        case POST_CHEFS_FAILURE:
            return{...state, errorPosting: action.payload, isPosting: false};

        case START_DELETE_POST:
            return {...state, errorDeleting: null, isDeleting: true};
        case DELETE_POST_SUCCESS:
            return {...state, isDeleting: false, chefPosts: action.payload};
        case DELETE_POST_FAILURE:
            return {...state, errorDeleting: action.payload, isDeleting: false};
        
        case START_EDIT_POST:
            return {...state, isEditing: true, errorEditing: null};
        case EDIT_POST_SUCCESS: 
            return {...state, isEditing: false, chefPosts: action.payload};
        case EDIT_POST_FAILURE: 
            return {...state, isEditing: false, errorEditing: action.payload};
        
        default:
            return state;
    }
};