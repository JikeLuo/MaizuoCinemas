const reducer = (prevState = {
    topList: [],
    comingSoonList: [],
    swiperList: []
}, action) => {
    let newPrev = {...prevState}
    switch (action.type) {
        case "topList":
            // console.log('topReducer已選擇')
            newPrev.topList = action.payload
            return newPrev
        case "comingSoonList":
            // console.log('comingSoon已選擇')
            newPrev.comingSoonList = action.payload
            return newPrev
        case "swiperAxios":
            console.log('swiper已選擇')
            newPrev.swiperList = action.payload
            return newPrev
        default:
            return prevState
    }
}

export default reducer