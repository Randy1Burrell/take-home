export default function (state=null, action) {
    switch (action.type) {
        case 'favourite':
            state = JSON.parse(localStorage.getItem('favouriteTokens'))
            if (state === null) {
                state = { }
            }
            state[action.payload['key']] = action.payload['token']
            localStorage.setItem('favouriteTokens', JSON.stringify(state))
            break
        case 'unfavourite':
            state = JSON.parse(localStorage.getItem('favouriteTokens'))
            delete state[action.payload['key']]
            localStorage.setItem('favouriteTokens', JSON.stringify(state))
            break
        default:
    }
    return state
}
