import React, { Component } from 'react';
import Moods from './components/Moods';
import TodoList from './components/TodoList';

export class App extends Component {
    render() {
        return (
            <div>
                <TodoList />
                <Moods />
            </div>
        );
    }
}

export default App;
