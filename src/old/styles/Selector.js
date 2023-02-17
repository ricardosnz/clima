import styled from 'styled-components';

// CitySelector
export const FormCity = styled.form`
padding: 1rem 0;

h2{
  font-size: 5rem;
}

input, button{
  border: none;
  outline: none;
  color: white;  
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
}
`;

export const InputCity = styled.input`
padding: 10px 14px;
background: rgb(5, 58, 248);
transition: opacity 400ms;
opacity: .6;

&:hover, &:focus{
  opacity: 1;
}
`;

export const ButtonCity = styled.button`
padding: 10px 14px;
color: white;
background: rgb(5, 58, 248);
transition: background 400ms;
cursor: pointer;


&:hover{
  background: rgb(11, 76, 240);
  box-shadow: 2px 3px 6px rgb(7, 21, 182);
}
`;
