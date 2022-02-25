//!PARENT COMPONENT
import React, { useState } from 'react';
import AddNewTodo from './AddNewTodo';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { todo: 'Pay the bills.', id: 1 },
        { todo: 'Do your homework.', id: 2 },
        { todo: 'Call your gal.', id: 3 },
    ]);

    let [count, setCount] = useState(todos.length);

    const addTodo = (todo) => {
        setTodos([...todos, { todo, id: Number(count) }]);
        setCount(++count);
    };

    return (
        <div>
            <ol>
                {todos.map((todoArray) => {
                    return <li key={todoArray.id}>{todoArray.todo}</li>;
                })}
            </ol>
            <AddNewTodo addTodo={addTodo} />
            <button className="ui button">Score: {count}</button>
        </div>
    );
};

export default TodoList;
