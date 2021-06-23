import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export class TodoList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
            <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center' }}>
                <p className="item">Go for a walk</p>
                <p className="item">Go for shopping for dinner</p>
                <p className="item">Plan the family trip</p>
                <button className="ui button primary" onClick={changeTheme}>
                    Toggle Theme
                </button>
            </div>
        );
    }
}

export default TodoList;
