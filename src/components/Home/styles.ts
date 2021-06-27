import styled from "styled-components";

export const Logo = styled.div`
    text-align: center;

  img{
    height: 180px;
  }
`;

export const Form = styled.form`
  margin: auto;
  margin-top: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;

  
  input{
      flex: 1;
      height: 60px;
      background-color: #FFF;


      border-radius: 5px 0px 0px 5px;
      border-style: none;
      border: 2px solid #30A7D7;
      outline: none;
  }

  button{
      height: 60px;
      background-color: #30A7D7;
      color: #FFF;

      border-radius: 0px 5px 5px 0px;
      border-style: none;

      transition: filter 0.2s;

      &:hover{
        filter: brightness(0.9);
      }

  }
  
`;

export const Poke = styled.div`

  width: 400px;
  margin: auto ;
  margin-top: 20px;



 div{

  height: 150px;
  background-color: #30A7D7;
  border-radius: 15px;
  

  & + div{
    margin-top: 50px;
  }
 }

 h3{
      font-size: 25px;
      background-color: #30A7D7;
      color: #000;

      text-align: center;
      text-transform:  uppercase;

      padding: 10px 0px 0px  0px;
  }

  img{
    background-color: #30A7D7;
    width: 90px;
    height: 90px;
    margin-left: 15px;
  }

  p{
    display: flex;
    color: #000;
    background-color: #30A7D7;
    margin-left: 20px;

  }

  span{
    display: flex;
    background-color: #30A7D7;
  }

`
