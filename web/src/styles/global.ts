import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    *{
      margin:0;
      padding:0;
      outline:0;
      box-sizing: border-box;
    }

    *:focus{
      outline:0
    }

    html, body, #root {
      height:100%
    }

    body{
      background:#e5e6f0;
      -webkit-font-smoothing: antialiased;
    }

    body, input, button{
      font:14px 'Roboto' , sans-serif;
    }

    a{
      text-decoration:none;
    }

    ul{
      list-style:none;
    }

    button{
      cursor: pointer;
    }

    /* @media(max-width:1180){
      #app{
        display:flex !important;
        flex-direction:column;
      }
    } */
`;
