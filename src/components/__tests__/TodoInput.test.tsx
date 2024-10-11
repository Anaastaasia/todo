import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoInput from '../TodoInput';

test('добавление новой задачи', () => {
    const addTodo = jest.fn();
    const { getByPlaceholderText } = render(<TodoInput addTodo={addTodo} />);

    const input = getByPlaceholderText('Введите новую задачу...') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Новая задача' } });
    fireEvent.submit(input);

    expect(addTodo).toHaveBeenCalledWith('Новая задача');
    expect(input.value).toBe('');
});
