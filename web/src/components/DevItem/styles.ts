import styled from 'styled-components';

export const Container = styled.li`
  width:400px;
  background:#fff;
  box-shadow:0 0 14px 0 rgba(0,0,0,0.8);
  border-radius:4px;
  padding: 20px 20px;

  @media(max-width:1180px) {
    margin-top:20px;
    width:100%;
  }
`;

export const Header = styled.header`
  display:flex;
  align-items:center;

  img{
    width:54px;
    height:54px;
    border-radius:50%;
    margin: 0 10px 10px 5px;
  }

  div > strong{
    font-size:16px;
    display:block;
  }

  div > small{
    display:block;
    color:#777;
  }
`;

export const Body = styled.div`
  p{
    color:#666;
    font-size:12px;
    margin:10px 0;
    line-height:20px;
  }
`;

export const Footer = styled.div`
  a{
    color:#8e4dff;
    font-size:14px;
    text-decoration:none;
  }
`;
