export default function (state=null, action) {
    switch (action.type) {
        case 'createToken':
            console.log(action)
        default:
    }
    return state
}
