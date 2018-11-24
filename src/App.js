import React, { Component } from 'react';
import './App.scss';
import Semaphore from './components/semaphore/Semaphore'

class App extends Component {
    state = {
        current : 0
    }

    thick = () => {
        this.setState(() => ({
            current : Math.floor(Math.random() * 255)
        }))

    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.thick()}, 600);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {

        return (
            <div className="App">
                <Semaphore lights={this.state.current}/>
            </div>
        );
    }
}

export default App;
