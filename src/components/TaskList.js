import React from 'react';
import GetTokenComponent from "./GetTokenComponent";

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],

            inputValue: '',
            id: '',
        };
    }

    renderTasksInList = () => {
        const JSXArray = this.state.list.map(item => {
            return (
                <GetTokenComponent onChangeStatus={this.deleteTask()} description={item.description} done={item.done} id={item.id}/>
            )
        })
        return JSXArray;
    }

    addTask = () => {
        if(this.state.inputValue.length <= 0){
            console.log(this.state.inputValue.length);
            return null;
        }

        const taskList = this.state.list;
        taskList.push({
            description: this.state.inputValue,
            done: false,
            id: new Date().getTime(),
        });

        this.setState({
            list: taskList,
            inputValue: ''
        })
    }

    onInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    deleteTask = (id) => {
        console.log(id);
    }


    render() {
        return (
            <div className="container">
                <h1 className="title">Hello World</h1>
                <div className="columns">
                    <div className="field has-addons column is-half">
                    <div className="control">
                            <input className="input" type="text" placeholder="insert text"
                                   onChange={this.onInputChange}/>
                        </div>
                        <div className="control">
                            <a className="button is-info" onClick={this.addTask}>
                                Submit
                            </a>
                        </div>
                    </div>

                    <div className="task-container column is-half">
                        <ul>
                            {this.renderTasksInList()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskList;