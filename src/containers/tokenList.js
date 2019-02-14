import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListTokens from '../components/listTokens'
import { store } from '../utils'
import { getTokens, favouriteToken, unfavouriteToken } from '../actions/index'

class TokenList extends Component {
    componentDidMount () {
        store.dispatch(getTokens())
    }
    createTokenList() {
        const { history } = this.props
        return (
            <ListTokens
                tokens={this.props.tokens}
                handleFavourite={this.props.favouriteToken}
                handleUnfavourite={this.props.unfavouriteToken}
                history={history}
                title={'Tokens'}
            />
        )
    }
    render () {
        return (
            <div className="card">
                {this.createTokenList()}
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
        getTokens: getTokens
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TokenList)
