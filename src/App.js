import { useState } from 'react';
import './App.css';

import FullArticle from './components/FullArticle';
import Favourites from './components/Favourites';
import Title from './components/Title';
import RefreshButton from './components/RefreshButton';
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
        <FullArticle openDetails={openDetails} setOpenDetails={setOpenDetails} />
        <Favourites openFavourites={openFavourites} setOpenFavourites={setOpenFavourites} />

        {/* <img className="absolute bg-cover" src="/imgs/rocket.jpg" alt="Rocket" /> */}
        <div className="absolute w-full z-0 bg-rocket bg-cover bg-center h-screen"></div>
        <div className="">
        </div>

        <div className="pt-6">
          <Title />
        </div>

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
