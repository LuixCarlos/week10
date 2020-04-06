import React from 'react';
import * as S from './styles';

export interface DevInterface{
  _id?: string,
  login_git_hub: string,
  name?: string,
  bio?: string,
  avatar_url?:string,
  tecks: [],
}

interface DevProps{
  dev: DevInterface
}

const DevItem: React.FC<DevProps>= ({ dev }) => (
  <S.Container>
    <S.Header>
      <img src={dev.avatar_url} alt="avatar" />
      <div>
        <strong>{dev.name}</strong>
        <small>{dev.tecks? dev.tecks.map(teck=> ' '+teck).toString():''}</small>
      </div>
    </S.Header>
    <S.Body>
      <p>
        {dev.bio? dev.bio : "Sem Cadastrada Bio no Perfil do GitHub"}
      </p>
    </S.Body>
    <S.Footer>
      <a href={`https://github.com/${dev.login_git_hub}`}>Acessar Perfil no GitHub</a>
    </S.Footer>
  </S.Container>
);

export default DevItem;
