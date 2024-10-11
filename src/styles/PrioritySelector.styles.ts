    import styled from 'styled-components';

    export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    `;

    export const SelectedColorButton = styled.div<{ selectedColor: 'red' | 'yellow' | 'green' }>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${(props) =>
        props.selectedColor === 'red' ? '#f00' :
        props.selectedColor === 'yellow' ? '#ffa500' :
        '#008000'};
    cursor: pointer;
    border: 2px solid #ccc;
    `;


    export const ColorOptions = styled.div`
    position: absolute;
    top: 30px;
    display: flex;
    gap: 8px;
    background: white;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: opacity 0.2s ease-in-out;
    `;

    export const ColorOption = styled.div<{ color: 'red' | 'yellow' | 'green' }>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${(props) =>
        props.color === 'red' ? '#f00' :
        props.color === 'yellow' ? '#ffa500' :
        '#008000'};
    cursor: pointer;
    border: 2px solid #ccc;
    `;
