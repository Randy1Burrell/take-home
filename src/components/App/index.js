import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import NavBar from '../navbar'
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
                            path: 'createtoken',
                            nmae: 'add token'
                        }
                    ]
                }
            />
              Hello, World
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
