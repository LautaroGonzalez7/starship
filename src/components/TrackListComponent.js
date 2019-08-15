import React from 'react';
import TrackComponent from "./TrackComponent";

class TrackListComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        this.accessToken = props.location.accessToken;
        this.tokenType = props.location.tokenType;
        this.albumId = props.location.albumId;
        this.state = {
            tracks: [],
        };
    }

    renderTrack = () => (
        this.state.tracks.map((track, index) => (
            <TrackComponent name={track.name} track_number={track.track_number} duration_ms={track.duration_ms} key={index} />
        ))
    );

    componentDidMount() {
        this.start();
    }

    start = async () => {
        const response = await fetch(`https://api.spotify.com/v1/albums/${this.albumId}/tracks?limit=50`, {
            headers: new Headers({
                'authorization': this.tokenType+' '+this.accessToken
            })
        });
        const data = await response.json();

        if (response.status === 400 || response.status === 401) {
            this.props.history.push('/artist');
        } else {
            var newTrack = []
            data.items.forEach(function(track, key) {
                newTrack = [ ...newTrack, track ];
            });
            this.setState({
                tracks: newTrack
            });
        }
    }

    render = () => (
        <div>
            <div className="dark-container">
                <table className="table is-fullwidth">
                    <thead>
                    <tr>
                        <th><abbr>Nro.</abbr></th>
                        <th><abbr>Nombre</abbr></th>
                        <th><abbr>Duracion</abbr></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderTrack()}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default TrackListComponent;