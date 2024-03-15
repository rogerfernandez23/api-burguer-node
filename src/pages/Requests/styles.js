import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    height: 100%;
    min-height: 100vh;
`;

export const ContainerItens = styled.div`
`;

export const Image = styled.img`
    width: 180px;
`;

export const H1 = styled.h1`
    color: white;
    margin-top: 25px;
    margin-bottom: 40px;
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    line-height: normal;    
`;


export const Button = styled.button`
    background-color: gray;
    color: white;
    width: 300px;
    height: 50px;
    margin-top: 50px;
    margin-bottom: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    border-radius: 30px;
`;

export const User = styled.li`

    height: 220px;
    display: flex;
    flex-direction: column;

    margin-top: 25px;
    width: 400px;
    height: 200px;
    padding: 15px 20px 15px 25px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.25);
    border: none;
    outline: none;
    margin-bottom: 5px;

    p {
        color: white;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

    .order {
        color: white;
        font-size: 20px;
        margin-bottom: 8px;
        text-transform: uppercase;
    }

    .name {
        color: #a6ada7;
        font-size: 18px;
        margin-bottom: 2px;
    }

    .price {
        color: #08D427;
        font-size: 22px;
    }

    .status {
        color: #D6BF22;
        font-size: 14px;
    }

    div {
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-around
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    img {
        width: 25px;
    }
    
`;