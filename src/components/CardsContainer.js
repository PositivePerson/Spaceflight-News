import React, { useContext } from 'react'
import ArticleContext from '../context/article/articleContext';

import NewsCard from './NewsCard';

const CardsContainer = ({ showArticle }) => {
    const articleContext = useContext(ArticleContext);

    const showDetails = (id) => {
        articleContext.setArticleToShow(id);
        showArticle();
    }

    return (
        <div className="flex flex-col gap-6 overflow-y-scroll max-h-75vh mt-14">
            {!articleContext.loading ? articleContext.articles?.map((article, id) => (
                <NewsCard showDetails={showDetails} key={id} article={article} />
            )) : (
                <NewsCard loading={true} />
            )}
        </div>
    )
}

export default CardsContainer
