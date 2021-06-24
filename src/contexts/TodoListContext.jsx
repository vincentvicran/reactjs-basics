import React, { createContext, useReducer } from 'react';
import { todosReducer } from '../reducers/todosReducer';

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todosReducer, [
        { text: 'Go for a walk', id: 1 },
        { text: 'Go for shopping for dinner', id: 2 },
        { text: 'Plan the family trip', id: 3 },
    ]);

    // const addTodo = (todo) => {
    //     setTodos([...todos, { text: todo, id: Math.random() }]);
    // };

    // const removeTodo = (id) => {
    //     setTodos(
    //         todos.filter((todo) => {
    //             return todo.id !== Number(id);
    //         })
    //     );
    // };

    return <TodoListContext.Provider value={{ todos, dispatch }}>{children}</TodoListContext.Provider>;
};

export default TodoListContextProvider;
