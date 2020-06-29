const gameStateReducer = (state='HOME') => {
    switch(state){
        case 'PLAY':
            return state;
        default:
            return 'HOME';
    }
}

export default gameStateReducer;