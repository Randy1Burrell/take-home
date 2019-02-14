import axios from 'axios'

export const getTokens = () =>  {
    return dispatch => {
        const url = 'https://roll-76f98.firebaseio.com/tokens.json'
        axios.get(url).then((res) => {
            if (res.status === 200) {
                dispatch({
                    type: 'data',
                    payload: res.data
                })
            }
        })
    }
}

export const submitToken = (token) => {
    return dispatch => {
        const url = 'https://roll-76f98.firebaseio.com/tokens.json'
        axios.post(url, token).then((res) => {
            dispatch({
                type: 'createToken',
                payload: res
            })
        })
    }
}

export const submitNull = () => {
    return {
        type: null,
        payload: null
    }
}

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

