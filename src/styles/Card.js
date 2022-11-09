import styled from 'styled-components';

//WeatherCard

export const Card = styled.li`
display: flex;
flex-direction: column;
padding: 15px 12px;
background: rgba(11, 76, 240, 0.71);
list-style: none;
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