import React, { Component } from 'react';

export class TodoList extends Component {
    render() {
        return (
            <div className="ui list">
                <p className="item">Go for a walk</p>
                <p className="item">Go for shopping for dinner</p>
                <p className="item">Plan the family trip</p>
            </div>
        );
    }
}

export default TodoList;
