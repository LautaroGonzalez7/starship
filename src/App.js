import React, {Component} from 'react';
import HeaderComponent from './components/HeaderComponent';
import GetTokenComponent from './components/GetTokenComponent';
import ArtistListComponent from './components/ArtistListComponent';
import AlbumsListComponent from './components/AlbumsListComponent';
import SinglesListComponent from './components/SinglesListComponent';
import TrackListComponent from './components/TrackListComponent';

import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginComponent from "./components/LoginComponent";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact={true} path="/" component={LoginComponent}/>
                    <Route path='/' component={HeaderComponent} />
                    <Route path="/login-success/:token" component={GetTokenComponent} />
                    <Route path="/artist/" component={ArtistListComponent} />
                    <Route path="/albums/" component={AlbumsListComponent} />
                    <Route path="/singles/" component={SinglesListComponent} />
                    <Route path="/tracks/" component={TrackListComponent} />
                </div>
            </Router>
        );
    }
}

export default App;
