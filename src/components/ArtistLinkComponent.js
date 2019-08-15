import React from 'react';
import {Link} from "react-router-dom";

class ArtistLinkComponent extends React.Component {
    render = () => (
        <div>
            <header>
                <nav className="navbar dark-nav" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <div className="logo"></div>
                        </a>
                    </div>

                    <div id="navbarBasic" className="navbar-menu">
                        <div className="navbar-start">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <Link className="button is-success" to={{ pathname: '/artist', accessToken: localStorage.getItem('accessToken'), tokenType: localStorage.getItem('tokenType')}}>Buscar otro artista</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default ArtistLinkComponent;
