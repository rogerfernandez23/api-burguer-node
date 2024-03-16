import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Swal from 'sweetalert2';
import axios from 'axios';
import Logo from '../../assets/logo_page2.png';
import Trash from '../../assets/trash.png';
import Check from '../../assets/check.png';

import {
    Container,
    ContainerItens,
    H1,
    Image,
    Button,
    User
    } from './styles';

const Req = () => {

    const history = useHistory();
    const [ requests, setRequests] = useState([]);

    const baseUrl = 'https://api-burguer-iota.vercel.app/';

    useEffect(() => {

        async function updateOrders() {
            const { data: requestsGet } = await axios.get(`${baseUrl}storage/order`)
            setRequests(requestsGet);
        }

        updateOrders();
    }, []);

    async function refreshRequest(userId) {
        await axios.patch(`${baseUrl}storage/order/${userId}`)

        const { data: newStatus } = await axios.get(`${baseUrl}storage/order`)
        setRequests(newStatus);
    }

    function refresh(userId){
        Swal.fire({
            title: 'Deseja finalizar o pedido?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
            confirmButtonText: 'SIM',
            cancelButtonText: 'NÃO'
        }).then((result) => {
            if(result.isConfirmed){
            
                Swal.fire(
                    'Pronto!',
                    'Pedido Finalizado!',
                    'success'
                )
                refreshRequest(userId);
            }}
    )};

    async function deleteRequest(userId) {

        await axios.delete(`${baseUrl}storage/order/${userId}`); 
        const newRequests = requests.filter((user) => user.id !== userId);
        setRequests(newRequests);

        Swal.fire({
            icon: 'success',
            title: 'Pedido Deletado com Sucesso',
            color: 'black',
            showConfirmButton: false,
            timer: 2500
          })
    };

    function navigate(){
        history.push('/');
      }

    return (
        <Container>
            <Image alt="logo-2" src={Logo}/>

            <ContainerItens>
            <H1>Pedidos</H1>

            <ul>
                {requests.map((user) => 
            (<User key={user.id}> 
            <p className="order">{user.order}</p>
            <p className="name">{user.name}</p>
            <p className="price">{user.price}</p>
            <p className="status">{user.status}</p>
            <div>
            <button onClick={() => refresh(user.id)}><img alt='alterar-status-do-pedido' title="Finalizar Pedido" src={Check}/></button>
            <button onClick={() => deleteRequest(user.id)}><img alt='trash' title="Apagar Pedido" src={Trash}/></button>
            </div>
            </User>
            ))}
            </ul>

            </ContainerItens>

            <Button onClick={navigate}>Voltar ao Início</Button>
        </Container>
    )
};

export default Req;