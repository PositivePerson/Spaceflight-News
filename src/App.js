import './App.css';

import Title from './components/Title';
import RefreshButton from './components/RefreshButton';
import NewsCard from './components/NewsCard';

function App() {
  return (
    <div className="App relative">

      {/* <img className="absolute bg-cover" src="/imgs/rocket.jpg" alt="Rocket" /> */}
      <div class="absolute w-full z-0 bg-rocket bg-cover bg-center h-screen"></div>
      <div className="">
      </div>

      <div className="pt-6">
        <Title />
      </div>

      <button className="absolute right-0 top-0 mt-16">
        <RefreshButton />
      </button>

      <div className="px-24">
        <NewsCard />
      </div>
    </div>
  );
}

export default App;
