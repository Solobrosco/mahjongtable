import React from 'react';
import Dot from '../assets/M_Dot1.png';
import '../css/App.css';

const Tile = () => {
    return (
        <div>
            <div className='tile'>
                <img src={Dot} alt='Dot1'></img>
            </div>
        </div>
    );
}

export default Tile;