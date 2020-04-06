/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Form, { InterfaceFormData } from '../components/DevForm';
import { DevInterface } from '../components/DevItem/DevItem';
import DevList from '../components/DevList/Delist';
import api from '../services/api';
import * as S from './styles';



const Home = () => {

  const [devs, setDevs] = useState<DevInterface[]>([]);

  const handleSubmit = async (data?: InterfaceFormData) => {
    try {
      console.log(data);
      const response = await api.post('/devs', data);

      console.log(response);
      if(response && response.status === 200){
        toast.warn(response.data.message);
      }

      if(response && response.status === 201){
        setDevs([...devs, response.data])
      }

    } catch (error) {
      if(error && error.response && error.response.status === 404){
        toast.error(error.response.data.message);
      }
    }
  };

  useEffect( ()=> {
    async function loadDevs(){
      const response = await api.get('/devs')
      setDevs(response.data)
    }
    loadDevs();
  },[])

  return (
    <S.Container>
      <S.Aside>
        <strong>Cadastrar Desenvolvedor</strong>
        <Form onSubmit={handleSubmit}/>
      </S.Aside>
      <S.Main>
        <DevList devs={devs}/>
      </S.Main>
    </S.Container>
  );
};


export default Home;
