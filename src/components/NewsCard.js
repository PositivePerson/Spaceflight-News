import React from 'react'

const NewsCard = ({ showDetails, article = {}, loading = false, fav = false }) => {

    const {
        id,
        title,
        imageUrl,
    } = article;

    return (
        <div onClick={() => showDetails(id)} className={`flex flex-col md:flex-row items-center p-6 rounded-xl backdrop-filter backdrop-blur-xl shadow-md ${!loading && !fav && 'cursor-pointer'} `}>
            {loading && (
                <h3 className="mx-auto">Loading news for you...</h3>
            )}
            <h3 className="flex italic p-6">{title}</h3>
            <img className="w-40 rounded-xl" src={imageUrl} alt="" />
        </div>
    )
}

export default NewsCard