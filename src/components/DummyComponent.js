import React from 'react';

class StarshipList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starships: [],
            inputId: '1',
        };
    }

    renderStarships = () => (
        this.state.starships.map((ship, index) => (
            <Starship crew={ship.crew} manufacturer={ship.manufacturer}
                      length={ship.length} key={index} />
        ))
    );

    fetchStarship = async () => {
        const response = await fetch(`https://swapi.co/api/starships/${this.state.inputId}/`);
        const data = await response.json();

        if (response.status === 404) {
            alert('Starship not available');
        } else {
            const newStarships = [ ...this.state.starships, data ];
            console.log(data);
            this.setState({
                starships: newStarships
            });
        }
    }
    updateInput = async event => {
        if (event.target.id === 'inputId') {
            this.setState({
                inputId: event.target.value,
            });
        }
    }
    render = () => (
        <div>
            <div className="row"><br/><br/>
                <div className="six columns">
                    <label>ID</label>
                    <input onChange={this.updateInput} className="u-full-width" placeholder="Ingresa ID..." id="inputId" type="text" />
                    <button onClick={this.fetchStarship} className="button-primary u-full-width" id="buttonFetch">Get Starship</button>
                </div>
            </div>

            <table>
                <thead>
                <tr>
                    <th>Crew</th>
                    <th>Manufacturer</th>
                    <th>Length</th>
                </tr>
                </thead>
                <tbody>
                {this.renderStarships()}
                </tbody>
            </table>
        </div>
    )
}

export default StarshipList;
