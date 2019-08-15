import React from 'react';
import {Link} from "react-router-dom";

class AlbumComponent extends React.PureComponent {
    render = () => (
        <tr>
            <td><img src={this.props.images[0].url} width="120px" alt="spotify"/></td>
            <td>{this.props.name}</td>
            <td>{this.props.release_date}</td>
            <td>{this.props.total_tracks}</td>
            <td>
                <Link className="button is-primary" to={{ pathname: '/tracks', accessToken: localStorage.getItem('accessToken'), tokenType: localStorage.getItem('tokenType'), albumId: this.props.albumId}}>Ver</Link>
            </td>
        </tr>
    );
}

export default AlbumComponent;
