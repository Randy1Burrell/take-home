import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SingleToken from '../components/singleToken'
import { favouriteToken, unfavouriteToken } from '../actions/index'

class ViewToken extends Component {
    showSingleToken() {
        const { tokenId } = this.props.match.params
        const { history, tokens } = this.props
        if (!tokenId || Object.keys(tokens[tokenId] || {}).length <= 0) {
            return (
                <div style={{padding: '30px'}}>
                    <h2>No match has been found!!</h2>
                    <button
                        className="btn btn-primary"
                        style={{fontVariant: 'petite-caps'}}
                        onClick={() => {
                            history.replace('/')
                        }}
                    >
                        ok
                    </button>
                </div>
            )
        }
        return (
            <SingleToken
                token={tokens[tokenId]}
                tokenId={tokenId}
                handleFavourite={this.props.favouriteToken}
                handleUnfavourite={this.props.unfavouriteToken}
                history={this.props.history}
            />
        )
    }
    render () {
        return (
            <div className="card">
                {this.showSingleToken()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tokens: state.tokens,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        favouriteToken: favouriteToken,
        unfavouriteToken: unfavouriteToken,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ViewToken)
