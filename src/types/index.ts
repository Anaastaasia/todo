export interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
    priority: 'red' | 'yellow' | 'green';
}
