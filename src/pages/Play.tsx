import React from 'react';
import '../css/App.css';
// import Player from '../features/player/Player';
// import Tile from '../components/Tile';
import PlayersHand from '../features/Hand';
import Table from '../components/Table';
import PlayerFunction from '../features/player/functions/Calls';
// import Dice from '../componentsCDice';

function Play(){
    return(
        <div className="App">
            <div className='table'>
                <Table />
            </div>
            <PlayersHand />
            <PlayerFunction />
        </div>
    );
}

export default Play; 