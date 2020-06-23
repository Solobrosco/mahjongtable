import React from 'react';

// Player can call shang, pong, and kong
// Player can throwaway tile
// Player can reorder their tiles or the game can order the tiles automatically
// rolls dice

type PlayerProps = {
    playerName?: string,
    turn?: boolean,
}

const Player = (props: PlayerProps) => {
    return(
        <div>
            I am {props.playerName}
            <br/>
            My turn is {props.turn}
        </div>
    );
}

export default Player;