import styled from 'styled-components';

export const Form = styled.form`
  strong{
    font-size:20px;
    text-align:center;
    display:block;
    color:#333;
  }

  small{
    color:#ACACAC;
    font-weight:bold;
    font-size:12px;
    color:#f48989;
  }

  label{
    color:#ACACAC;
    font-weight:bold;
    padding:10px 0 2px 0px;
    display:block;
  }

  input{
    width:100%;
    background:#fff;
    border:1px solid #bebebe;
    border-radius:4px;
    padding:5px 5px;
  }

  .inputForm{
    height:32px;
  }

  .location{
    display:flex;
    flex-direction:row;
  }

  button{
    margin-top:20px;
    width:100%;
    border:0;
    background:#7d40e7;
    border-radius:4px;
    padding: 10px;
    color:#fff;
    font-weight:bold;
    font-size:16px;
    transition: background 0.2s
  }
  button:hover{
    background:#6931ca;
  }
`;
