import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    height: 100vh;
`;

export const ContainerItens = styled.div`
`;

export const Image = styled.img`
    width: 260px;
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

export const InputLabel = styled.p`
    color: white;
    margin-top: 20px;
    margin-bottom: 3px;
    padding-left: 16px;
    font-size: 14px;
    font-weight: 300;
`;

export const Input = styled.input`
    display: flex;
    padding: 19px 139px 18px 15px;
    align-items: center;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    color: white;
    font-size: 18px;
    font-weight: 300;
    border: none;
    outline: none;
`;

export const Button = styled.button`
    background-color: #D93856;
    color: white;
    width: 300px;
    height: 70px;
    margin-top: 50px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    border-radius: 30px;
`;

export const ButtonRequest = styled.button`
    background-color: green;
    color: white;
    width: 300px;
    height: 70px;
    margin-top: 20px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    border-radius: 30px;
`;