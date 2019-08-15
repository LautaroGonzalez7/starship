import React from 'react';
import {Link} from "react-router-dom";

class GetTokenComponent extends React.PureComponent {

    componentDidMount() {
        this.token();
    }

    token = () => {
        const query = new URLSearchParams(this.props.location.hash);
        const accessToken = query.get('#access_token');
        const tokenType = query.get('token_type');

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('tokenType', tokenType);
    }

    render = () => (
        <div className="dark-container justify">
            <div>
                <img src="http://assets.stickpng.com/thumbs/59b5bb466dbe923c39853e00.png" width="100%" alt="spotify"/><br/>
                <Link className="big-btn button is-success" to={{ pathname: '/artist', accessToken: localStorage.getItem('accessToken'), tokenType: localStorage.getItem('tokenType')}}>Buscar Artista</Link>
            </div>
        </div>
    )

}

export default GetTokenComponent;