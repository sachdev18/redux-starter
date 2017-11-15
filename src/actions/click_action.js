export const incriment = (dispatch) => {
    //return dispatch => {
        return ({
            type: "PLUS",
            payload: 1
        });
    //}
}

export const decriment = () => {
    return dispatch => {
        dispatch({
            type: "MINUS",
            payload: 1
        })
    }
}
