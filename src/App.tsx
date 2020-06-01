import React from 'react';
import './css/main.css';

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
    <div className="background">
      <div className="text-lg text-center text-black bg-blue-200">Mahjong Online!</div>
      <button className="item-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Play!
      </button>
    </div>
  );
}

export default App;
