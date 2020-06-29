import React from 'react';
// import Dot from '../assets/M_Dot1.png';
import { connect } from 'react-redux';
import '../css/App.css';
import tileSprite from '../assets/mahjong_tiles_spritesheet.png';

const Tile = () => {
    return (
        <div className='tile object-cover'
            style={{
                position: 'relative',
                backgroundImage: `url('${tileSprite}')`,
                width: '256px',
                height: '246px'
            }}
        />
        // <div>
        //     <div className='tile'>
        //         <img src={Dot} alt='Dot1'></img>
        //     </div>
        // </div>
    );
}

export default connect()(Tile);