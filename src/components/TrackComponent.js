import React from 'react';

class TrackComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.duration = this.props.duration_ms;
        this.durationMin = Math.ceil(this.duration/1000/60);
        this.durationSec = Math.ceil(this.duration/1000)%60;
        this.duration = this.durationMin+':'+this.durationSec;
    }

    render = () => (
        <tr>
            <td>{this.props.track_number}</td>
            <td>{this.props.name}</td>
            <td>{this.duration}</td>
        </tr>
    );
}

export default TrackComponent;
