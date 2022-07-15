const reducer = (prevState = {
    detailList: []
}, action) => {
    let newPrev = {...prevState}
    switch (action.type) {
        case "changeCity":
            newPrev.cityName = action.payload
            return newPrev
        default:
            return prevState
    }
}

export default reducer