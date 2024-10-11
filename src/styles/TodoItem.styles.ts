    import styled from 'styled-components';

    export const Item = styled.div<{ isCompleted: boolean; priority: 'red' | 'yellow' | 'green' }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 25px;
    border: 2px solid ${(props) => {
        if (props.isCompleted) return '#ddd';
        return props.priority === 'red' ? '#f00' : props.priority === 'yellow' ? '#ffa500' : '#008000';
    }};
    border-radius: 5px;
    background-color: #f9f9f9;
    text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
    color: #000;
    cursor: pointer;
    width: 70%;
    align-self: center; 
    box-sizing: border-box;

    &:hover {
        background-color: #f0f0f0;
    }
    `;
