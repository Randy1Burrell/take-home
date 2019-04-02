import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submitToken, submitNull} from '../actions/index'

class TokenForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: '',
            symbol: '',
            volume: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.setSubmit = this.setSubmit.bind(this)
    }

    handleChange (event) {
        event.preventDefault()
        const { value, name } = event.target
        this.setState({[name]: value})
    }

    handleSubmit (event) {
        event.preventDefault()
        setTimeout(this.setSubmit, 3500)
        const { name, price, symbol, volume } = this.state

        if (symbol.toUpperCase() !== symbol) {
            this.setSubmit('SYMBOL')
            return
        }

        if (!name || !price || !symbol || !volume) {
            this.setSubmit('invalid')
            return
        }

        this.props.submitToken(this.state)
        this.setSubmit(this.props.submit)
        this.handleReset(event)
    }

    setSubmit(state=null) {
        this.setState({sub: state})
    }

    handleReset (event) {
        event.preventDefault()
        document.getElementById('token-form').reset()
        console.log(event)
        this.setState({
            name: '',
            price: '',
            symbol: '',
            volume: '',
        })
    }

    showSubmitForm() {
        const types = [
            {
                name: 'name',
                type: 'text'
            },
            {
                name: 'price',
                type: 'number'
            },
            {
                name: 'symbol',
                type: 'text'
            },
            {
                name: 'volume',
                type: 'number'
            }
        ]
        const sub = this.state.sub
        return (
            <form
                id="token-form"
                onSubmit={this.handleSubmit}
                style={{padding: '30px'}}
            >
                {(sub) && (
                    <div className={`alert alert-${(sub && sub.status === 200)? 'success' : 'warning'} alert-dismissible fade show`} role="alert">
                        {sub && sub.status === 200 && (
                            <strong>Submit Successful!</strong>
                        )}
                        {sub === 'SYMBOL' && (
                            <strong>Symbol needs to be uppercase!!</strong>
                        )}
                        {sub === 'invalid' && (
                            <strong>All Values Required Mate!!</strong>
                        )}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                         </button>
                    </div>
                )}
                {
                    types.map((data) => {
                        return (
                            <div key={data.name} className="form-group">
                                <label
                                    style={{fontVariant: 'all-petite-caps'}}
                                    htmlFor={data.name}
                                >
                                    {data.name}
                                </label>
                                <input
                                    type={data.type}
                                    id={data.name}
                                    name={data.name}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    placeholder={`Place token ${data.name} here.`}
                                />
                            </div>
                        )
                    })
                }
                <input
                    className="btn btn-danger float-right"
                    style={{fontVariant: 'all-petite-caps', marginLeft: '10px'}}
                    type="reset"
                    value="reset"
                    onClick={this.handleReset}
                />
                <input
                    className="btn btn-primary float-right"
                    style={{fontVariant: 'all-petite-caps'}}
                    type="submit"
                    value="Submit"
                />
            </form>
        )
    }
    render () {
        return (
            <div className="card">
                {this.showSubmitForm()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tokens: state.tokens,
        submit: state.submit,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        submitToken: submitToken,
        submitNull: submitNull,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TokenForm)
