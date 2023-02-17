import styled from 'styled-components';

//WeatherList

export const List = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-gap: 15px;
justify-items: center;
width: 100%;
max-width: 1000px;
`;