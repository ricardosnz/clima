import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px 12px;
  background: rgba(68, 0, 255, 0.59);
  box-shadow: 1px 2px 6px rgb(7, 21, 182);

  .item-temp{
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
      width: 60px;
    }
    div{
      display: flex;
      align-items: center;
      font-weight: 700;
    }
    p{
      display:flex;
      flex-direction: column; 
    }
  }
  .item-day{
    display: flex;
    justify-content: space-between;
  }

`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 16px;
  justify-items: center;
  width: 100%;
  max-width: 1000px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  
  padding: 24px 16px;
  width: 100%;
  min-height: 100vh;

  background-color: rgb(68, 0, 255);

  .weather__title{
    font-size: 28px;
    position: relative;
    
    &::after{
      content: "";
      position: absolute;
      botton: 0;
      left: 0;
      widht: 10px;
      height: 10px;
      background-color: rgba(255, 0, 0, 0.214)
    }
  }

`;

export const FormCity = styled.form`
  padding: 1rem 0;

  input, button{    
    font-size: 18px;
    padding: 16px 20px;
    background: rgb(5, 58, 248);
  }
`;

export const InputCity = styled.input`  
  transition: opacity 400ms;
  opacity: .8;
  &:hover, &:focus{
    opacity: 1;
  }
`;

export const ButtonCity = styled.button`
  transition: background 400ms;
  &:hover{
    background: rgb(11, 76, 240);
    box-shadow: 2px 3px 6px rgb(7, 21, 182);
  }
`;
