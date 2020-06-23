import React from 'react';
import '../css/App.css';
import PlayersHand from '../components/Hand';
import Table from '../components/Table';
import PlayerFunction from '../features/player/functions/Calls';
// import {useSelector} from 'react-redux';
import Dice from '../components/Dice';

function Play(){
    // const gamestate = useSelector(state=>false);
    let h : Array<number> = [1,3,4,5];
    let r : Array<number> = [3,5,7];
    return(
        <div className="App-header">
            <Dice/>
            <div className='flex'>
                <Table />
            </div>
            <PlayersHand hand={h} revealed={r}/>
            <PlayerFunction />
        </div>
    );
}

export default Play; 