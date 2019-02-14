export default function (state=null, action) {
    switch (action.type) {
        case 'createToken':
            return action.payload
        default:
    }
    return state
}
