const initialState = {
  counter: 0
}

const clickReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case 'PLUS':
      return Object.assign({}, state, {
        counter: state.counter + action.payload
      })
    case 'MINUS':
    return Object.assign({}, state, {
      counter: state.counter - action.payload
    })
    default:
      return state
  }
}

// const clickReducer = (state = {counter: 0}, action) => {
// console.log(state,"fedsasfdco");
//     switch (action.type) {
//         case 'PLUS':
//         state = {
//             ...state,
//             counter: counter + action.payload
//         };
//         break;
//
//         case 'MINUS':
//         state = {
//             ...state,
//             counter: counter - action.payload
//         };
//         break;
//     }
//     return state;
// }
export default clickReducer;
