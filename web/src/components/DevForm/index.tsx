import React, { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { toast } from 'react-toastify';

import * as S from './styles';

interface SelectedTecks{
  value?:string,
  label?:string,
}

export interface InterfaceFormData{
  loginGitHub:string,
  tecks:string[],
  latitude:Number,
  longitude:Number
}

interface DevFormProps{
  onSubmit: (data?:InterfaceFormData) => Promise<void>
}

const DevForm:React.FC<DevFormProps> = ({ onSubmit }) => {

  const [loginGitHub, setLoginGitHub] = useState('');
  const [tecks, setTecks] = useState<string[]>([]);
  const [latit, setLati] = useState(0);
  const [longit, setLogi] = useState(0);
  const [selecteds, setSelecteds] = useState()

  const defaultTecks = [
    { value: 'React Native', label: 'React Native' },
    { value: 'React JS', label: 'React JS' },
  ];

  const handleChange = async (newValue: any) => {
    setSelecteds(newValue);
    let tecksAux = [];
    if(newValue){
      tecksAux = newValue.map((value: SelectedTecks) => value.value);
    }
    setTecks(tecksAux);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLati(latitude);
        setLogi(longitude);
      },
      (error) => {
        console.log(error);
      },
    );
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({
      loginGitHub,
      tecks,
      latitude: latit,
      longitude: longit,
    });
    toast.success('Desenvolvedor Cadastrado com sucesso!!!');
    setLoginGitHub('');
    setTecks([]);
    setSelecteds(undefined);
  }

  return (
    <>
      <S.Form onSubmit={(event) => handleSubmit(event)}>
          <div>
            <label htmlFor="loginGitHub">Usuario do GitHub</label>
            <input
              required
              autoComplete="off"
              className="inputForm"
              id="loginGitHub"
              name="loginGitHub"
              type="text"
              onChange={(event) => setLoginGitHub(event.target.value)}
              value={loginGitHub}
            />
          </div>
          <div>
            <label htmlFor="tecks">Tecnologias </label>
            <small>*Selecione ou digite e pressione enter</small>
            <CreatableSelect
              isMulti
              value={selecteds}
              onChange={handleChange}
              options={defaultTecks}
              placeholder="Selecione..."
            />
          </div>
          <div className="location">
            <div>
              <label htmlFor="latitude">Latitute</label>
              <input
                required
                autoComplete="off"
                className="inputForm"
                id="latitude"
                name="latitude"
                type="number"
                onChange={(event) => setLati(Number(event.target.value))}
                value={latit}
              />
            </div>
            <div>
              <label htmlFor="longitude">Longitude</label>
              <input
                required
                autoComplete="off"
                className="inputForm"
                id="longitude"
                name="longitude"
                type="number"
                onChange={(event) => setLogi(Number(event.target.value))}
                value={longit}
              />
            </div>
          </div>
          <button type="submit">Cadastar</button>
        </S.Form>
    </>
  )
}

export default DevForm
