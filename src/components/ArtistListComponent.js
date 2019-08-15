import React from 'react';
import ArtistComponent from "./ArtistComponent";

class ArtistListComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        this.accessToken = props.location.accessToken;
        this.tokenType = props.location.tokenType;
        this.state = {
            artist: [],
            inputId: '',
        };
    }

    renderArtist = () => (
        this.state.artist.map((artist, index) => (
            <ArtistComponent name={artist.name} followers={artist.followers.total} genres={artist.genres}
                             popularity={artist.popularity} images={artist.images} artistId={artist.id} key={index}/>
        ))
    );


    search = async () => {
        const response = await fetch(`https://api.spotify.com/v1/search?query=${this.state.inputId}&type=artist`, {
            headers: new Headers({
                'authorization': this.tokenType + ' ' + this.accessToken
            })
        });
        const data = await response.json();

        if (response.status === 400 || response.status === 401) {
            alert('Se ha perdido la conexion, debe acceder nuevamente.');
            this.props.history.push('/');
        } else {
            var newArtist = [];
            data.artists.items.forEach(function (artist, key) {
                if (artist.images.length === 0) {
                    artist.images = [{url: 'https://cdn.konbini.com/wp-content/blogs.dir/11/files/2018/08/alf-810x425.jpg'}]
                }
                newArtist = [...newArtist, artist];
            });
            this.setState({
                artist: newArtist
            });
        }
    }

    updateInput = async event => {
        if (event.target.id === 'inputId') {
            this.setState({
                inputId: event.target.value,
            }, () => {
                if (this.state.inputId.length > 2) {
                    this.search();
                }
                ;
            });

        }
    }


    render = () => (
        <div>
            <div className="dark-container">
                <div className="search-content justify search-artist">
                    <div className="search-artist-box">
                        <div className="field">
                            <div className="control">
                                <input onInput={this.updateInput} className="input is-primary" type="text" id="inputId"
                                       placeholder="Buscar artista..."/>
                            </div>
                        </div>
                    </div>
                </div>

                <table className="table is-fullwidth">
                    <thead>
                    <tr>
                        <th><abbr>Imagen</abbr></th>
                        <th><abbr>Nombre</abbr></th>
                        <th><abbr>Seguidores</abbr></th>
                        <th><abbr>Generos</abbr></th>
                        <th><abbr>Popularidad</abbr></th>
                        <th><abbr>Albums</abbr></th>
                        <th><abbr>Singles</abbr></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderArtist()}
                    </tbody>
                </table>
            </div>


        </div>
    )

}

export default ArtistListComponent;