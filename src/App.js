import { useState } from 'react';
import './App.css';

import FullArticle from './components/FullArticle';
import Favourites from './components/Favourites';
import Title from './components/Title';
import RefreshButton from './components/RefreshButton';
import ShowFavsButton from './components/ShowFavsButton';
import CardsContainer from './components/CardsContainer';

import ArticleState from './context/article/ArticleState';

function App() {

  const [openDetails, setOpenDetails] = useState(false);
  const [openFavourites, setOpenFavourites] = useState(false);

  const showArticle = () => {
    setOpenDetails(true);
  }

  const showFavourites = () => {
    setOpenFavourites(true);
  }

  return (
    <ArticleState>
      <div className="App relative">
        <div className="absolute w-full z-0 bg-rocket bg-cover bg-center h-screen" />
        <FullArticle openDetails={openDetails} setOpenDetails={setOpenDetails} />
        <Favourites openFavourites={openFavourites} setOpenFavourites={setOpenFavourites} />

        <div className="pt-6">
          <Title />
        </div>

        <button className="absolute left-0 top-0 mt-16">
          <ShowFavsButton showFavourites={showFavourites} />
        </button>

        <button className="absolute right-0 top-0 mt-16">
          <RefreshButton />
        </button>

        <div className="max-w-xl mx-auto">
          <CardsContainer showArticle={showArticle} />
        </div>
      </div>
    </ArticleState>
  );
}

export default App;
