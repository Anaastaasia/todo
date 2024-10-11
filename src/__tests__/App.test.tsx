import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('отображает только невыполненные задачи при выборе фильтра "Невыполненные"', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Введите новую задачу...');
    const button = screen.getByText('Добавить');

    fireEvent.change(input, { target: { value: 'Невыполненная задача' } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: 'Выполненная задача' } });
    fireEvent.click(button);
    const completedTask = screen.getByText('Выполненная задача');
    fireEvent.click(completedTask);

    const filterButton = screen.getByText('Невыполненные');
    fireEvent.click(filterButton);

    expect(screen.queryByText('Выполненная задача')).toBeNull(); 
    expect(screen.getByText('Невыполненная задача')).toBeInTheDocument(); 
  });
});
