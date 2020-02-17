import styled from 'styled-components';
import {respondTo} from './respondTo';

export const ButtonWrapper = styled.button`
  height: 40px;
  width: 120px;
  padding: 0px 20px;
  background-color: grey;
  border-radius: 5px;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: black;   
  transition: 0.2S;
  text-align: center;
  cursor: pointer;
  transition: 0.2S;
  border: none;
  ${respondTo.S`
      font-size: 1.5vw;
      height: 3vw;
    `}
  &:hover{
    color: white; 
    background-color: #05264C;
  }
  &:focus{
    color: white; 
    background-color: black;
  }
`;


