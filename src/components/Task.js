import React from 'react';

class Task extends React.PureComponent {
    constructor(props) {
        super(props);
        this.description = props.description;
        this.done = props.done;
        this.id = props.id;
    }

    handleChange = () => {
        this.props.onChangeStatus(this.id)
    }

    render() {
        return (
            <div className="task" >
                <li>{this.description}</li>
                <input onChange={this.handleChange} type="checkbox" defaultChecked={true}/>
            </div>
        );
    }
}

export default Task;