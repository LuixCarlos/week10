import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:row;
  align-items:flex-start;

  max-width: 1200px;
  margin: 0 auto;
  padding:60px 30px;

  @media(max-width:1180px) {
    display:flex;
    flex-direction:column
  }

`;

export const Aside = styled.div`
  width:320px;
  background:#fff;
  box-shadow:0 0 14px 0 rgba(0,0,0,0.8);
  border-radius:4px;
  padding: 30px 20px;
  margin-right:15px;

  @media(max-width:1180px) {
    width:100%;
  }

`;

export const Main = styled.div`
  flex:1;
`;
