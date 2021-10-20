import React from 'react'

import { ReactComponent as Love } from '../graphics/heart.svg';

const ShowFavsButton = ({ showFavourites }) => {
    return (
        <div onClick={showFavourites} className="min-w-8 p-4  backdrop-filter backdrop-blur-md shadow-md rounded-r-xl">
            <Love className="fill-current text-purple-600" alt="Hearth icon" />
        </div>
    )
}

export default ShowFavsButton
