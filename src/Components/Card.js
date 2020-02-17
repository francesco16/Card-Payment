import React from 'react';
import styled from 'styled-components';
import cardFront from '../img/cardFront.png';
import cardBack from '../img/cardBack.png';
import TotalInvoice from './TotalInvoice';

const Wrapper = styled.div`
  width: 350px;
  height: auto;
  position: relative;
  top: 0;
  right: 0;
  pointer-events: none;
  .name{
    top: 23%;
    font-size: 18px;
  }
  .number{
    top: 30%;
    font-size: 24px;
  }
  .exp{
    top: 41%;
    font-size: 18px;
    padding-left: 70px;
  }
  .cvc{
    top: 14.5%;
    left: 70%;
    font-size: 24px;
  }
  .card{
    position: absolute;
    top: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    backface-visibility: hidden;
    transition: transform 0.7s;
    transform-origin: center center;
  }
  .front{
    transform: perspective(400px) ${props=>props.isCvcFocused?'rotateY(180deg)':'none'};
  }
  .back{
    transform: perspective(400px) ${props=>props.isCvcFocused?'null':'rotateY(-180deg)'};
  }
`;
const CardDetail = styled.h2`
  position: absolute;
  left: 10%;
  font-family: 'Courier Prime', monospace;
  color: black;
`;
const ExpTitle = styled.span`
  font-size: 13px;
  font-family: sans-serif;
  color: black;
  margin-right: 10px;
  position: absolute;
  left: 0;
  top: 2px;
`;
const NamePlaceholder = styled.div`
  height: 18px;
  width: 200px;
  background-color: grey;
  border-radius: 5px;
  opacity: 0.6;
`;
const NumberPlaceholder = styled.div`
  height: 24px;
  width: 290px;
  background-color: grey;
  border-radius: 5px;
  opacity: 0.6;
`;
const ExpPlaceholder = styled.div`
  height: 18px;
  width: 80px;
  background-color: grey;
  border-radius: 5px;
  opacity: 0.6;
  display: inline-block;
`;
const CvcPlaceholder = styled.div`
  height: 24px;
  width: 45px;
  background-color: grey;
  border-radius: 5px;
  opacity: 0.6;
`;
const CardImg = styled.img`
  width: 100%;
  height: auto;
`;
export default function Card(props) {
  return (
    <Wrapper isCvcFocused={props.isCvcFocused}>
      <div className="card back" >
        <CardImg src={cardBack} alt="card" />
        <CardDetail className="cvc">
          {
          !props.val.Cvc && <CvcPlaceholder />
          }
          {props.val.Cvc}
        </CardDetail>
      </div>
      <div className="card front" >
        <CardImg src={cardFront} alt="card" />
        <CardDetail className="name">
          {
          !props.val.Name && <NamePlaceholder />
          }
          {props.val.Name}
        </CardDetail>
        <CardDetail className="number">
          {
          !props.val.CardNumber && <NumberPlaceholder />
          }
          {props.val.CardNumber}
        </CardDetail>      
        <CardDetail className="exp">
          <ExpTitle>expire on: </ExpTitle>
          {
          !props.val.ExpiringDate && <ExpPlaceholder />
          }
          {props.val.ExpiringDate}
        </CardDetail>
      </div>
      <TotalInvoice total={props.total}/>
    </Wrapper>
  )
}

