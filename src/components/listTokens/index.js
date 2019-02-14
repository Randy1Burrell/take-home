import React, { Component } from 'react';
import Token from '../token'

class ListTokens extends Component {
    constructor(props) {
        super(props)
        this.state = {favourite: JSON.parse(
            localStorage
                .getItem('favouriteTokens')
        )}
    }

    componentDidMount () {
        this.setState({
            favourite:
            JSON.parse(
                localStorage
                    .getItem('favouriteTokens')
            )
        })
    }

    favourite = async(state) => {
        this.props.handleFavourite(state)

        this.setState({
            favourite:
            JSON.parse(
                localStorage
                    .getItem('favouriteTokens')
            )
        })
    }

    unfavourite = async(state) => {
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
        const fav = Object.keys(this.state.favourite || {}).length
        const other = Object.keys(this.props.tokens || {}).length
        const { history } = this.props

        return (
            <React.Fragment>
                <h1 className="card-header">{this.props.title}</h1>
                <div className="card-body">
                    {
                        fav > 0 && (
                            <React.Fragment>
                                <h1>Favourites</h1>
                                <ul className="list-group list-group-flush">
                                    <Token
                                        tokens={this.state.favourite}
                                        handleClick={this.unfavourite}
                                        buttonClass={'btn-outline-danger'}
                                        buttonText={'Unfavourite'}
                                        history={history}
                                    />
                                </ul>
                                {
                                    (fav < other) && (
                                        <h1 style={{margin: '10px'}}>
                                            Others
                                        </h1>
                                    )
                                }
                            </React.Fragment>
                    )}
                    {
                        other > 0 && (
                            <React.Fragment>
                                <ul className="list-group list-group-flush">
                                    <Token
                                        tokens={this.props.tokens}
                                        handleClick={this.favourite}
                                        buttonClass={'btn-outline-primary'}
                                        buttonText={'Favourite'}
                                        history={history}
                                    />
                                </ul>
                            </React.Fragment>
                        )
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default ListTokens
