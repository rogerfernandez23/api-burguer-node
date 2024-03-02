import React from "react";
import { useState, useRef } from "react";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';
import Logo from '../../assets/logo_base.png';

import {
    Container,
    ContainerItens,
    H1,
    Image,
    InputLabel,
    Input,
    Button,
    ButtonRequest
    } from './styles';

const Base = () => {
    const [ requests, setRequests ] = useState([]);
    const history = useHistory();
    const inputRequest = useRef();
    const inputName = useRef();
    const statusReq = 'Em Preparação';

    async function addNewRequest() {
        if(inputRequest.current.value === "" || inputName.current.value === ""){
            Swal.fire({
                icon: 'error',
                iconColor: 'red',
                color: 'black',
                background: 'white',
                title: 'Erro!',
                text: 'Insira todos os dados para cadastro!',
                timer: '2000',
                showConfirmButton: false
            })
        } else {  
    
          const {data: newRequest} = await axios.post('http://localhost:3001/storage/order', 
          {
            order: inputRequest.current.value,
            name: inputName.current.value,
            price: `R$: ${Math.floor(Math.random() * (+ 1) + 13)}`,
            status: statusReq
          });
          setRequests([...requests, newRequest]);
          
          inputRequest.current.value = "";
          inputName.current.value = "";
    }
};

    function navigate(){
            history.push('/requests');
    }


    return (
        <Container>
            <Image alt="logo" src={Logo}/>
            <ContainerItens>
                <H1>FAÇA SEU PEDIDO:</H1>

                <InputLabel>Pedido</InputLabel>
                <Input ref={inputRequest} placeholder="escreva aqui"/>

                <InputLabel>Seu Nome</InputLabel>
                <Input ref={inputName} placeholder="escreva aqui"/>            
            </ContainerItens>

            <Button onClick={addNewRequest}>Cadastrar Pedido</Button>

            <ButtonRequest onClick={navigate}>Todos os Pedidos</ButtonRequest>
        </Container>
    )
};

export default Base;