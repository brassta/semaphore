import React, { Component } from 'react';
import './App.scss';
import Semaphore from './components/semaphore/Semaphore'


class App extends Component {

    render() {
        return (
            <div className="wrapper">
                <Semaphore/>
            </div>
        );
    }
}

export default App;
