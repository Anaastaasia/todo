    import React, { useState, ChangeEvent } from 'react';
    import { Input } from '../styles/TodoInput.styles';
    import { Button } from '../styles/Button.styles';
    import PrioritySelector from './PrioritySelector';

    interface Props {
    addTodo: (text: string, priority: 'red' | 'yellow' | 'green') => void;
    }

    const TodoInput: React.FC<Props> = ({ addTodo }) => {
    const [value, setValue] = useState('');
    const [priority, setPriority] = useState<'red' | 'yellow' | 'green'>('red');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (value.trim()) {
        addTodo(value, priority);
        setValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', width: '100%' }}>
        <Input
            type="text"
            placeholder="Введите новую задачу..."
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            style={{ flexGrow: 1 }}
        />
        <PrioritySelector selectedColor={priority} onSelectColor={setPriority} />
        <Button type="submit" style={{ flexShrink: 0 }}>
            Добавить
        </Button>
        </form>
    );
    };

    export default TodoInput;
