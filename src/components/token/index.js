import React, { Component } from 'react'

class Token extends Component {
    filter = () => {
        let favourites = JSON.parse(
            localStorage
                .getItem('favouriteTokens')
        )
        let otherTokens = {}
        if (!favourites) {
            return this.props.tokens
        }
        for (let key in this.props.tokens) {
            try {
                if (!favourites[key]) {
                    otherTokens[key] = this.props.tokens[key]
                }
            } catch (err) {
                console.log(err)
            }
        }
        return otherTokens
    }

    sortFunction = (a, b) => {
        return a.props.children[0].localeCompare(b.props.children[0])
    }

    render() {
        let list = []
        let tokens = null
        if (this.props.buttonText.toLowerCase() === 'favourite')
            tokens = this.filter()
        else
            tokens = this.props.tokens

        for (let key in tokens) {
            list.push(
                <li
                    key={key}
                    className="list-group-item"
                >
                    {tokens[key]['name']}
                    <button
                        type="button"
                        style={{margin: '0 10px'}}
                        className={`btn btn-outline-secondary float-right`}
                        onClick={() => {
                            this.props.history.push(`token/${key}`)
                        }}
                    >
                        view
                    </button>
                    <button
                        type="button"
                        className={`btn ${this.props.buttonClass} float-right`}
                        onClick={() => {
                            this.props.handleClick({key: key, token: tokens[key]})
                        }}
                    >
                        {this.props.buttonText}
                    </button>
                </li>
            )
        }
        return (
            <React.Fragment>
                {list.sort(this.sortFunction)}
            </React.Fragment>
        )
    }
}

export default Token
