import { GET_DATA, SET_ARTICLE, SET_LOADING } from '../types';

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
                // articleToShow: state.articles.find(article => article.id === action.payload),
                articleToShow: action.payload,
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