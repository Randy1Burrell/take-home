export default function (state=null, action) {
    switch (action.type) {
        case 'createToken':
            console.log(action)
            break
        default:
    }
    return state
}
