import React from 'react';
import '../css/App.css';
import Player from '../features/player/Player';
import Tile from '../components/Tile';

function Table(){
    return(
        <div className="App-header">
            <Tile />
            <Player />
        </div>
    );
}

export default Table; 