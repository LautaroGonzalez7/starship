import React from 'react';
import {Route} from "react-router-dom";
import ArtistLinkComponent from "./ArtistLinkComponent";

class HeaderComponent extends React.Component {

    render = () => (
        <div>
            <Route path='/albums' component={ArtistLinkComponent} />
            <Route path='/singles' component={ArtistLinkComponent} />
            <Route path='/tracks' component={ArtistLinkComponent} />
        </div>
    )
}

export default HeaderComponent;
