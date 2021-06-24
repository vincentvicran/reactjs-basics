import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoListContext } from '../contexts/TodoListContext';

const TodoList = () => {
    //* STATE FOR CURRENT COMPONENT
    const [todo, setTodo] = useState('');

    //* CONSUMING TODOLISTCONTEXT AND DECONSTRUCTURING TODOS AND ADDTODO FUNCTION
    const { todos, dispatch } = useContext(TodoListContext);
    // console.table(todos);
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', text: todo });
        //! TO REINITIALIZE THE VALUE OF THE STATE OF THE CURRENT COMPONENT
        setTodo('');
    };

    const handleRemoveTodo = (e) => {
        const id = e.target.id;
        dispatch({ type: 'REMOVE_TODO', id });
    };

    return (
        <div style={{ background: theme.background, color: theme.text, textAlign: 'center' }}>
            {todos.length ? (
                //* DO THIS IF LENGTH IS TRUE OR PRESENT
                todos.map((todo) => {
                    return (
                        <p
                            id={todo.id}
                            onClick={handleRemoveTodo}
                            key={todo.id}
                            className="item"
                            style={{ cursor: 'pointer' }}
                        >
                            {todo.text}
                        </p>
                    );
                })
            ) : (
                //* DO THIS IF LENGTH IS FALSE OR ABSENT
                <div>You have no Todos.</div>
            )}
            <form onSubmit={handleFormSubmit} className="ui form">
                <label htmlFor="todo">Add Todo:</label>
                {/* HERE SET VALUE TO THE STATE OF THE CURRENT COMPONENT I.E. TODO NOT TODOS */}
                <input type="text" onChange={handleChange} value={todo} />
                <input className="ui button secondary" type="submit" value="Add New Todo" />
            </form>
            <button className="ui button primary" onClick={changeTheme}>
                Toggle Theme
            </button>
        </div>
    );
};

export default TodoList;
