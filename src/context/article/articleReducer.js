import { GET_DATA, SET_ARTICLE, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_LOADING } from '../types';

const manageStateCalls = (state, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                articles: action.payload,
                loading: false
            };
        case SET_ARTICLE:
            return {
                ...state,
                articleToShow: action.payload,
                loading: false
            };
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [...state.favourites, state.articles.find(article => article.id === action.payload)],
                loading: false
            };
        case REMOVE_FAVOURITE:
            return {
                ...state,
                favourites: state.favourites.filter(article => article.id !== action.payload),
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

export default manageStateCalls;