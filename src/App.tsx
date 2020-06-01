import React from 'react';
import logo from './M_Dot1.png'
import './css/main.css';
import './App.css'

function App() {
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
        <h1 className="font-mono text-6xl text-white py-10">Mahjong Online!</h1>
        <div className='tile shadow-md'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='py-10'>
          <button className="shadow-md font-mono text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Play!
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
