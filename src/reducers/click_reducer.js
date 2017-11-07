const clickReducer = (state = {counter: 0}, action) => {
console.log(state,"fedsasfdco");
    switch (action.type !== undefined) {
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