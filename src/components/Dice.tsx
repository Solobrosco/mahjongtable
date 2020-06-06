import React from 'react';

// A cube with sides numbers 1-6, each representing a side accordingly, is thrown randomly into space landing on number.

// function random(){
//     return();
// }
interface DieProps {
    numberOfDice: null,
    rolls: [],
    rollSum: []
}

const Dice = (props: DieProps) => {
    return(
        // <div>
        //     <ReactDice size={6} />
        // </div>
    <div>{props}</div>
    );
}

export default Dice;