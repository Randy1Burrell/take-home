export const submitToken = (token) => {
    return {
        type: 'createToken',
        payload: token
    }
}
