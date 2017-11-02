const clickReducer = (state = {counter: 0}, action) => {
    switch (action.type) {
        case 'incrimemt': 
        state = {
            ...state,
            counter: counter + action.payload
        };
        break;

        case 'decrement':
        state = {
            ...state,
            counter: counter - action.payload
        };
        break;
    }
    return state;
}
export default clickReducer;