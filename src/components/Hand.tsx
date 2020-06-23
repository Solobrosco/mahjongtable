import React from 'react';
// import Tile from '../components/Tile';

type HandProps = {
    hand?: Array<number>,
    revealed?: Array<number>,
}

const Hand = (props: HandProps) => {
    return(
        <div>
            hand {props.hand}
            <br/>
            revealed {props.revealed}
        </div>
    );
}

export default Hand;