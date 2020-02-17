import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 75%;
  .text{
    text-align: center;
    font-family: sans-serif;
    font-size: 25px;

  }
`;
export default function TotalInvoice(props) {
  return (
    <Wrapper>
      <p className="text">Your total: {props.total}€</p>
    </Wrapper>
  )
}
