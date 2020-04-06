import React from 'react';

import DevItem, { DevInterface } from '../DevItem/DevItem';
import * as S from './styles';

interface DevListProps{
  devs: DevInterface[]
}

const DevList: React.FC<DevListProps> = ({ devs }) => (
  <S.Container>
    { devs.map((dev: DevInterface)=> (<DevItem key={dev._id} dev={ dev }/>))}
  </S.Container>
);

export default DevList;
