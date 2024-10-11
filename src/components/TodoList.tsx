    import React from 'react';
    import { Todo } from '../types';
    import TodoItem from './TodoItem';

    interface Props {
    todos: Todo[];
    toggleComplete: (id: number) => void;
    }

    const TodoList: React.FC<Props> = ({ todos, toggleComplete }) => {
    return (
        <>
        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
        </>
    );
    };

    export default TodoList;
