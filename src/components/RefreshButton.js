import React, { useContext, useState, useEffect } from 'react';
import ArticleContext from '../context/article/articleContext';

import { ReactComponent as Refresh } from '../graphics/refresh.svg';

const RefreshButton = () => {
    const articleContext = useContext(ArticleContext);

    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        articleContext.getData();
        //eslint-disable-next-line
    }, [])

    const click = () => {
        setClicked(true);
        setTimeout(() => {
            setClicked(false)
        }, 275);

        articleContext.getData();
    }

    return (
        <div onClick={click} className="min-w-8 p-4  backdrop-filter backdrop-blur-xl shadow-md rounded-l-xl">
            <Refresh className={`${clicked && 'animate-spin'} fill-current text-purple-600`} src="/imgs/refresh.svg" alt="Refresh" />
        </div>
    )
}

export default RefreshButton
