import React from 'react';
import Tile from './Tile';
import Dice from './Dice';

type TableProps = {
    mahjongPieces?: {},
    playerList?: Array <string>
}

const Table = (props: TableProps) => {
    return(
        <div className='flex container mx-auto bg-blue-800 p-5'>
            <div className='thrown'>
                <Tile />
            </div>
            <div className='revealed'>
                revealed
            </div>
            <div className='southRevealed'>
                south
            </div>
            <div className='westRevealed'>
                west
            </div>
            <div className='northRevealed'>
                north
            </div>
            <Dice />
        </div>
    );
}

export default Table;