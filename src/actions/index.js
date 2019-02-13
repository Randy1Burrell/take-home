export const favouriteToken = (token) => {
    return {
        type: 'favourite',
        payload: token
    }
}

export const unfavouriteToken = (token) => {
    return {
        type: 'unfavourite',
        payload: token
    }
}

export const submitToken = (token) => {
    return {
        type: 'createToken',
        payload: token
    }
}
