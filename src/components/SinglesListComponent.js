import React from 'react';
import AlbumComponent from "./AlbumComponent";

class SinglesListComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        this.accessToken = props.location.accessToken;
        this.tokenType = props.location.tokenType;
        this.artistId = props.location.artistId;
        this.state = {
            albums: [],
        };
    }

    renderAlbum = () => (
        this.state.albums.map((album, index) => (
            <AlbumComponent name={album.name} release_date={album.release_date} total_tracks={album.total_tracks}
                            images={album.images} albumId={album.id} key={index}/>
        ))
    );

    componentDidMount() {
        this.search();
    }

    search = async () => {
        const response = await fetch(`https://api.spotify.com/v1/artists/${this.artistId}/albums?limit=50`, {
            headers: new Headers({
                'authorization': this.tokenType + ' ' + this.accessToken
            })
        });
        const data = await response.json();

        if (response.status === 400 || response.status === 401) {
            this.props.history.push('/artist');
        } else {
            var newAlbum = []
            data.items.forEach(function (album, key) {
                if (album.album_type !== 'album') {
                    if (album.images.length === 0) {
                        album.images = [{url: 'https://cdn.konbini.com/wp-content/blogs.dir/11/files/2018/08/alf-810x425.jpg'}]
                    }
                    newAlbum = [...newAlbum, album];
                }
            });
            this.setState({
                albums: newAlbum
            });
        }
    }

    render = () => (
        <div>
            <div className="dark-container">
                <table className="table is-fullwidth">
                    <thead>
                    <tr>
                        <th><abbr>Imagen</abbr></th>
                        <th><abbr>Nombre</abbr></th>
                        <th><abbr>Fecha</abbr></th>
                        <th><abbr>Nro. de canciones</abbr></th>
                        <th><abbr>Canciones</abbr></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderAlbum()}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default SinglesListComponent;