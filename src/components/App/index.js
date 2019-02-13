import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from '../navbar'
import TokenList from '../../containers/tokenList'
import TokenForm from '../../containers/createToken'
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="container">
            <NavBar
                links={
                    [
                        {
                            path: '/',
                            name: 'home'
                        },
                        {
                            path: '/createtoken',
                            name: 'add token'
                        }
                    ]
                }
            />
            <Switch>
                <Route path='/' component={TokenList} />
                <Route path='/createtoken' component={TokenForm} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
