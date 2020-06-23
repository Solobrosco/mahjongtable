const loggedInReducer = (state=false) => {
    switch('SIGN_IN'){
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    }
}

export default loggedInReducer;