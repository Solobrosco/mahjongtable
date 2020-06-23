import React from 'react';
import logo from '../assets/M_Dot1.png';
import '../css/main.css';
import '../css/App.css';
import {Link} from 'react-router-dom'; 

import Play from './Play';

const play = () => {
    console.log('clicked');
    return(
        <div>
            <Link to="/play">
                <Play />
            </Link>
        </div>
    );
}
function Home() {
  // const renderTile = tile => {
  //   const {frontImg, backImg, revealed} = tile;
  //   const img = revealed ? frontImg : backImg;
  //   return(
  //     <div className="Tile">
  //       <img src={img} alt='' />
  //     </div>
  //   )
  // }
  return (
    <div className="App">
      <header className='App-header'>
        <h1 className="scale font-mono text-6xl text-white py-10">Mahjong Online!</h1>
        <div className='scale tile'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='py-10'>
            <Link to={'/play'}>
                <button className="scale shadow-lg font-mono text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={play}>
                    Play!
                </button>
            </Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
