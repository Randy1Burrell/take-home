export default (state=null, action) => {
    switch (action.type) {
        case 'data':
            return action.payload
        default:
    }
    return state
}
