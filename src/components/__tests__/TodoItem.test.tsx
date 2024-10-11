import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from '../TodoItem';
import { Todo } from '../../types';

test('переключение состояния задачи', () => {
    const todo: Todo = { id: 1, text: 'Тестовая задача', isCompleted: false };
    const toggleComplete = jest.fn();
    const { getByText } = render(<TodoItem todo={todo} toggleComplete={toggleComplete} />);

    const item = getByText('Тестовая задача');
    fireEvent.click(item.previousSibling as ChildNode);

    expect(toggleComplete).toHaveBeenCalledWith(1);
});
