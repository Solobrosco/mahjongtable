import React from 'react';

let callShang = () => {
    // check player hand, check if recent player is North, and recent thrown for shang 
    console.log('Shang!')
}
let callPong = () => {
    // check player hand and recent thrown for pong
    console.log('Pong!')
}
let callKong = () => {
    // check player hand and recent thrown for kong
    console.log('Kong!')
}

const Calls = () => {
    return(
        <div>
            <button onClick={callShang} className="shadow-md font-mono text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Shang!
            </button>
            <button onClick={callPong} className="shadow-md font-mono text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Pong!
            </button>
            <button onClick={callKong} className="shadow-md font-mono text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Kong!
            </button>
        </div>
    );
}

export default Calls;