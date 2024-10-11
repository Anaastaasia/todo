import React, { useState } from 'react';
import { Container, TodoWrapper, Header } from './styles/App.styles';
import { Button, ButtonContainer } from './styles/Button.styles';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { Todo } from './types';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');
  const [isSortedByPriority, setIsSortedByPriority] = useState(false);

  const addTodo = (text: string, priority: 'red' | 'yellow' | 'green') => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      isCompleted: false,
      priority,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === 'completed' && !todo.isCompleted) return false;
      if (filter === 'incomplete' && todo.isCompleted) return false;
      return true;
    })
    .sort((a, b) => {
      if (a.isCompleted !== b.isCompleted) {
        return a.isCompleted ? 1 : -1;
      }
      if (isSortedByPriority && !a.isCompleted && !b.isCompleted) {
        const priorityOrder = { red: 1, yellow: 2, green: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      return 0;
    });

  return (
    <Container>
      <Header>TODO LIST</Header>
      <TodoWrapper>
        <TodoInput addTodo={addTodo} />
        <ButtonContainer>
          <Button fixedWidth onClick={() => setIsSortedByPriority(!isSortedByPriority)}>
            {isSortedByPriority ? 'По дате' : 'По важности'}
          </Button>
          <Button isActive={filter === 'all'} onClick={() => setFilter('all')}>
            Все задачи
          </Button>
          <Button isActive={filter === 'incomplete'} onClick={() => setFilter('incomplete')}>
            Невыполненные
          </Button>
          <Button isActive={filter === 'completed'} onClick={() => setFilter('completed')}>
            Выполненные
          </Button>
        </ButtonContainer>
        <TodoList todos={filteredTodos} toggleComplete={toggleComplete} />
      </TodoWrapper>
    </Container>
  );
};

export default App;
