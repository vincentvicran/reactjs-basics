//!CHILD COMPONENT
import React, { useState } from 'react';

const AddNewTodo = ({ addTodo }) => {
    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">To Do</label>
            <input type="text" value={todo} id="todo" onChange={(e) => setTodo(e.target.value)} />
            <input type="submit" className="ui button" value="Submit" />
        </form>
    );
};

export default AddNewTodo;
