const reducer = (prevState = {
    cinemasList: []
}, action) => {
    let newPrev = {...prevState}
    switch (action.type) {
        case "cinemasList":
            newPrev.cinemasList = action.payload
            return newPrev
        default:
            return prevState
    }
}

export default reducer