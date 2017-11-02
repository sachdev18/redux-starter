export function incriment() {
    return dispatch => {
        dispatch({
            type: "PLUS",
            payload: 1
        })
    }
}

export function decriment() {
    return dispatch => {
        dispatch({
            type: "MINUS",
            payload: 1
        })
    }
}