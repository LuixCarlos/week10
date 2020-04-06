import styled from 'styled-components';

export const Container = styled.ul`
  display:grid;
  grid-template-columns: 1fr 1fr;
  list-style:none;
  grid-gap:10px;

  @media(max-width:800px) {
    grid-template-columns: 1fr;
  }
`;
