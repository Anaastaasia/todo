    import styled from 'styled-components';

    export const Button = styled.button<{ isActive?: boolean; fixedWidth?: boolean }>`
    padding: 10px 15px;
    margin: 5px;
    border: 2px solid ${(props) => (props.isActive ? '#666' : '#ccc')};
    background-color: ${(props) => (props.isActive ? '#e0e0e0' : 'transparent')};
    color: ${(props) => (props.isActive ? '#333' : '#666')};
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
    transition: background-color 0.3s ease, color 0.3s ease;
    width: ${(props) => (props.fixedWidth ? '130px' : 'auto')}; /* Фиксированная ширина для кнопки */
    text-align: center;

    &:hover {
        background-color: #f0f0f0;
        color: #333;
    }

    &:focus {
        outline: none;
        border-color: #999;
    }
    `;

    export const ButtonContainer = styled.div`
    display: flex;
    gap: 5px;
    justify-content: center;
    margin-bottom: 15px;
    flex-wrap: nowrap;
    `;
