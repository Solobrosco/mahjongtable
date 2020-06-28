import React from 'react';
// import Tile from '../components/Tile';

type HandProps = {
    hand?: Array<number>,
}

const Hand = (props: HandProps) => {
    return(
        <div className="playarea flex container mx-auto bg-blue-700 w-auto">
            {props.hand}
        </div>
    );
}

export default Hand;