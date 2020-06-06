import React from 'react';
import { connect } from 'react-redux';
import '../css/App.css';
import tileSprite from '../assets/mahjong_tiles_spritesheet.png';

const Tile = () => {
    return (
        <div className='tile'
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
        // </div>d
    );
}

export default connect()(Tile);