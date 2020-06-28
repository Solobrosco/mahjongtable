import React from 'react';
import '../css/App.css';
import PlayersHand from '../components/Hand';
import Table from '../components/Table';
import PlayerFunction from '../features/player/functions/Calls';
// import {useSelector} from 'react-redux';

// Material UI Grid
import Grid from '@material-ui/core/Grid';

function Play(){
    // const gamestate = useSelector(state=>false);
    let h : Array<number> = [1,3,4,5];
    let r : Array<number> = [3,5,7];
    return(
        <div className="App-header">
            <div className='w-auto flex bg-blue-900 p-5 justify-center items-center'>
                <Grid >
                    <Grid>
                        <Table />
                        <div className="pt-5">
                            <PlayersHand hand={h} revealed={r}/>
                        </div>
                        <PlayerFunction />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Play; 