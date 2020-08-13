import React from 'react';
import {connect} from 'react-redux';

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
        <div className='flex justify-between items-center pt-5 bg-blue-900'>
            <button onClick={callShang} className="w-1/2 shadow-md font-mono text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                Shang!
            </button>
            <button onClick={callPong} className="w-1/2 shadow-md font-mono text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                Pong!
            </button>
            <button onClick={callKong} className="w-1/2 shadow-md font-mono text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                Kong!
            </button>
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {

//     }
// }

// const mapDispatchToProps = (dispatch) => {   
//     return {
//         callShang: () => dispatch({type: "CALL_SHANG"}),
//         callPong: () => dispatch({type: "CALL_PONG"}),
//         callKong: () => dispatch({type: "CALL_KONG"})
//     }
// }

export default connect()(Calls);