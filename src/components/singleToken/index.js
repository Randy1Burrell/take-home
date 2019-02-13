import React, { Component } from 'react'

class SingleToken extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favourite:
            JSON.parse(
            localStorage
                .getItem('favouriteTokens')
        )}
    }

    showToken = () => {
        const { token } = this.props
        const list = []
        for (const key in token) {
            list.push(
                <div
                    className="alert alert-primary"
                    key={key}
                >
                    <h6>
                        {key}:
                        <span
                            className="badge badge-primary"
                        >
                            {token[key]}
                        </span>
                    </h6>
                </div>
            )
        }
        return list
    }

    handleFavourite = (state) => {
        this.props.handleFavourite(state)
        this.setState({
            favourite:
            JSON.parse(
            localStorage
                .getItem('favouriteTokens')
            )
        })
    }

    handleUnfavourite = (state) => {
        this.props.handleUnfavourite(state)
        this.setState({
            favourite:
            JSON.parse(
            localStorage
                .getItem('favouriteTokens')
            )
        })
    }
    render() {
        const { tokenId, token} = this.props
        const favourite = Object.keys(this.state.favourite[tokenId] || {}) >= 0
        return (
            <div style={{padding: '20px', fontVariant: 'all-petite-caps'}}>
                <h3>Details</h3>
                {this.showToken()}
                <button
                    style={{
                        margin: '0 10px',
                        fontVariant: 'all-petite-caps'
                    }}
                    className="float-right btn btn-secondary"
                    onClick={() => {
                        this.props.history.goBack()
                    }}
                >
                    Go Back
                </button>
                <button
                    className={`float-right btn ${favourite ? 'btn btn-primary' : 'btn-danger'}`}
                    style={{fontVariant: 'all-petite-caps'}}
                    onClick={ () =>{
                        const state = {
                            key: tokenId,
                            token: token,
                        }
                            favourite ?
                            this.handleFavourite(state) : this.handleUnfavourite(state)
                        }
                    }
                >
                    {favourite ? 'favourite' : 'unfavourite'}

                </button>
            </div>
        )
    }
}

export default SingleToken
