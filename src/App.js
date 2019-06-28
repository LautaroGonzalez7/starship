import React, {Component} from 'react';
import StarshipList from './components/StarshipList';
import './App.css';
import './css/bulma.min.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <StarshipList />
            </div>
        );
    }
}

export default App;
