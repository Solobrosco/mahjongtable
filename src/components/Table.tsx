import React from 'react';
import Tile from './Tile';
// import Dice from './Dice';

type TableProps = {
    mahjongPieces?: {},
    playerList?: Array <string>
}

const Table = (props: TableProps) => {
    return(
        <div className='flex-column justify-center container mx-auto bg-blue-800'>
            <div className='southRevealed text-center bg-blue-500'>
                south
                <div className="bg-blue-400">
                    reveal
                </div>
            </div>
            <div className='westReveale text-center bg-blue-500'>
                west
                <div className="bg-blue-400">
                    reveal
                </div>
            </div>
            <div className='northRevealed text-center bg-blue-500'>
                north
                <div className="bg-blue-400">
                    reveal
                </div>
            </div>
            <div className='thrown justify-center p-5 bg-blue-500'>
            </div>
            {/* <Dice /> */}
            <div className='revealed text-center bg-blue-400'>
                revealed
            </div>
        </div>
    );
}

export default Table;