import React from 'react';

class LoginComponent extends React.Component {
    render = () => (
        <div className="dark-container justify">
            <div>
                <img src="http://assets.stickpng.com/thumbs/59b5bb466dbe923c39853e00.png" width="100%" alt="login"/><br/>
                <a className="big-btn button is-success" href='https://accounts.spotify.com/en/authorize?client_id=7c435673ada440e8873a497d012e3498&redirect_uri=http://localhost:3000/login-success/callback&response_type=token'>Acceder</a>
            </div>
        </div>
    )
}

export default LoginComponent;
