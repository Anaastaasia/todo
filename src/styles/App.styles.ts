    import styled from 'styled-components';

    export const Header = styled.h1`
    color: #888; /* Серый цвет по умолчанию */
    font-size: 50px;
    margin-bottom: 10px;
    text-align: center;
    transition: color 0.3s ease;

    &:hover {
        color: #ffa500; /* Оранжевый цвет при наведении */
    }
    `;

    export const Container = styled.div`
    max-width: 600px; /* Ширина контейнера */
    width: 100%;
    margin: 0 auto;
    padding-top: 20px;
    `;

    export const TodoWrapper = styled.div`
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px; /* Максимальная ширина контейнера */
    width: 100%; /* Контейнер занимает всю доступную ширину */
    margin: 0 auto; /* Центрируем по горизонтали */
    display: flex;
    flex-direction: column;
    align-items: center; /* Центрируем задачи по горизонтали */
    justify-content: flex-start;
    min-height: 300px;
    transition: min-height 0.3s ease;
    `;

