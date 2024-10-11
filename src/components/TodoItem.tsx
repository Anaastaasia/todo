    import React from 'react';
    import { Item } from '../styles/TodoItem.styles';
    import { Todo } from '../types';

    interface Props {
    todo: Todo;
    toggleComplete: (id: number) => void;
    }

    const TodoItem: React.FC<Props> = ({ todo, toggleComplete }) => {
    return (
        <Item 
        isCompleted={todo.isCompleted} 
        priority={todo.priority} 
        onClick={() => toggleComplete(todo.id)}
        >
        {todo.text}
        </Item>
    );
    };

    export default TodoItem;
