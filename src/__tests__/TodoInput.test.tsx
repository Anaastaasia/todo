import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from '../components/TodoInput';

describe('TodoInput', () => {
  it('добавляет новую задачу при отправке формы', () => {
    const addTodoMock = jest.fn();
    render(<TodoInput addTodo={addTodoMock} />);

    const input = screen.getByPlaceholderText('Введите новую задачу...');
    const button = screen.getByText('Добавить');

    fireEvent.change(input, { target: { value: 'Новая задача' } });
    fireEvent.click(button);

    expect(addTodoMock).toHaveBeenCalledWith('Новая задача', 'red'); // Проверяем, что задача добавлена
    expect(addTodoMock).toHaveBeenCalledTimes(1);
  });
});
