import React from 'react';
import {Link} from "react-router-dom";

class ArtistComponent extends React.PureComponent {
    render = () => (
        <tr>
            <td><img src={this.props.images[0].url} width="120px" alt="spotify"/></td>
            <td>{this.props.name}</td>
            <td>{this.props.followers}</td>
            <td>
                {this.props.genres.map((genre, i) => (
                    <p key={i}>{genre}</p>
                ))}
            </td>
            <td>{this.props.popularity}</td>
            <td>
                <Link className="button is-primary" to={{ pathname: '/albums', accessToken: localStorage.getItem('accessToken'), tokenType: localStorage.getItem('tokenType'), artistId: this.props.artistId}}>Ver</Link>
            </td>
            <td>
                <Link className="button is-primary" to={{ pathname: '/singles', accessToken: localStorage.getItem('accessToken'), tokenType: localStorage.getItem('tokenType'), artistId: this.props.artistId}}>Ver</Link>
            </td>
        </tr>
    );
}

export default ArtistComponent;
