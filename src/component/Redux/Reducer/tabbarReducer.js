const reducer = (prevState = {
    show: true, // 初始值
}, action) => {
    let newPrev = {...prevState}
    switch (action.type) {
        case 'Hide':
            console.log('hide')
            newPrev.show = false
            return newPrev
        case 'Show':
            console.log('show')
            newPrev.show = true
            return newPrev

        default:
            return prevState
    }
}

export default reducer