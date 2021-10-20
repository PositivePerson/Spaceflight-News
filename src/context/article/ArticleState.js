import React, { useReducer } from 'react';
import axios from 'axios';
import ArticleContext from './articleContext';
import ArticleReducer from './articleReducer';
import { GET_DATA, SET_ARTICLE, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_LOADING } from '../types';

const ArticleState = (props) => {
    const initialState = {
        articleToShow: {},
        articles: [],
        favourites: [],
        loading: false
    };

    const [state, dispatch] = useReducer(ArticleReducer, initialState);

    // Get Data
    const getData = async () => {
        setLoading();

        const res = await axios.get(
            `https://api.spaceflightnewsapi.net/v3/articles`
        );

        dispatch({
            type: GET_DATA,
            payload: res.data
        });
    };

    const setArticleToShow = async (id) => {
        setLoading();

        const res = await axios.get(
            `https://api.spaceflightnewsapi.net/v3/articles/${id}`
        );

        dispatch({
            type: SET_ARTICLE,
            payload: res.data
        });
    }

    const addToFavourites = async (id) => {
        dispatch({
            type: ADD_FAVOURITE,
            payload: id
        });
    }

    const removeFromFavourites = async (id) => {
        dispatch({
            type: REMOVE_FAVOURITE,
            payload: id
        });
    }

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <ArticleContext.Provider
            value={{
                articleToShow: state.articleToShow,
                articles: state.articles,
                favourites: state.favourites,
                loading: state.loading,
                getData,
                setArticleToShow,
                addToFavourites,
                removeFromFavourites,
            }}
        >
            {props.children}
        </ArticleContext.Provider>
    );
};

export default ArticleState;