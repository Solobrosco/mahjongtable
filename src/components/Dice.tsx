import React from 'react';

const Dice = () => {
    let [sum, setTot] = React.useState('');
    let getSum = () => {
        // tweak this later for displaying the dice
        let rollDice = () => {
            var tot : number = Math.floor(Math.random() * 6 ) + 1;
            tot += Math.floor(Math.random() * 6 ) + 1;
            return tot;
        }
        setTot(rollDice().toString());
    }
    // Player(E) rolls dice and dealer is chosen counting counter clockwise S-W-N-E-...
    // All possible dealers chosen
    // W-N-E-S-W-N-E-S-W--N--E-
    // 2-3-4-5-6-7-8-9-10-11-12
    // after this, dealer rolls again to break the number section of their wall
    // keep it simple - no need for implementation (yet)
    return(
        <div>
            <button onClick={getSum} className="shadow-md font-mono text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Roll Dice {sum}
            </button>
        </div>
    );
}

export default Dice;