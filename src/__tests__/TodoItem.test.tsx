import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem';
import { Todo } from '../types';

const mockTodo: Todo = {
    id: 1,
    text: 'Тестовая задача',
    isCompleted: false,
    priority: 'red',
};

describe('TodoItem', () => {
    it('переключает состояние выполнения задачи при клике', () => {
        const toggleCompleteMock = jest.fn();
        render(<TodoItem todo={mockTodo} toggleComplete={toggleCompleteMock} />);

        const taskElement = screen.getByText('Тестовая задача');
        fireEvent.click(taskElement);

        expect(toggleCompleteMock).toHaveBeenCalledWith(1);
    });
});
