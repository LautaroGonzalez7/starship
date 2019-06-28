import React from 'react';

class Starship extends React.PureComponent {
    render = () => (
        <tr>
            <td>{this.props.crew}</td>
            <td>{this.props.manufacturer}</td>
            <td>{this.props.length}</td>
        </tr>
    );
}

export default Starship;
