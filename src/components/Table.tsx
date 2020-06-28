import React from 'react';
import Tile from './Tile';
// import Dice from './Dice';

type TableProps = {
    mahjongPieces?: {},
    playerList?: Array <string>
}

const Table = (props: TableProps) => {
    return(
        <div className='flex-column justify-center container mx-auto bg-blue-800 p-5'>
            <div className='southRevealed text-base text-center px-5 bg-blue-500'>
                south
                <div className="bg-blue-400">
                    hand
                </div>
                <div className="bg-blue-400">
                    reveal
                </div>
            </div>
            <div className='westRevealed text-base text-center px-5 bg-blue-500'>
                west
                <div className="bg-blue-400">
                    hand
                </div>
                <div className="bg-blue-400">
                    reveal
                </div>
            </div>
            <div className='northRevealed text-base text-center px-5 bg-blue-500'>
                north
                <div className="bg-blue-400">
                    hand
                </div>
                <div className="bg-blue-400">
                    reveal
                </div>
            </div>
            <div className='thrown text-base justify-center px-5 bg-blue-500'>
                <Tile />
            </div>
            {/* <Dice /> */}
            <div className='revealed text-base text-center px-5 bg-blue-500'>
                revealed
            </div>
        </div>
    );
}

export default Table;