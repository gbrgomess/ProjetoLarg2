import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    background-color: #5e92f8;

    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }
    .logo img {
      margin-top: 30px;
    }
    h1 {
      color: white;
      font-size: 22px;
      font-weight: normal;
      margin-top: 10px;
    }


  .painel{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width:600px;
    height:350px;
    background-color:#fff;
    border-radius:10px;
  }

  .welcome{
    font-size:30px;
    color:#fff;
    margin-bottom:50px;
    font-family:Arial, Helvetica, sans-serif;


  }

  .link1{

    color:#fff;
    text-decoration:none;
    font-family:Arial, Helvetica, sans-serif;
    margin-top: 10px;


  }

  .footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    height: 80px;
  }

  button{
    border:none;
    background-color:#5e92f8;
    color:#fff;
    border-color:none;
    outline: none;

  }

`;
