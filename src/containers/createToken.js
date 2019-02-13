import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submitToken } from '../actions/index'

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
    }

    handleChange (event) {
        const { value, name } = event.target
        this.setState({[name]: value})
        console.log(this.state)
    }

    handleSubmit (event) {
        event.preventDefault()
        this.props.submitToken(this.state)
    }

    handleReset (event) {
        event.preventDefault()
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
        return (
            <form
                onSubmit={this.handleSubmit}
                style={{padding: '30px'}}
            >
                {
                    types.map((data) => {
                        return (
                            <div key={data.name} className="form-group">
                                <label
                                    style={{fontVariant: 'all-petite-caps'}}
                                    for={data.name}
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
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        submitToken: submitToken,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TokenForm)
