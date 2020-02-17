import React from 'react';
import styled from 'styled-components';
import PaymentForm from './Components/PaymentForm';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(88, 88, 88);
`;
const PaymentFormWrapper = styled.div`
  width: 700px;
  min-width: 700px;
  height: 400px;
  min-height: 400px;
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 15px;
`;
export default function App() {
  const total = "250"
  return (
    <Wrapper>
      <PaymentFormWrapper>
        <PaymentForm total={total}/>
      </PaymentFormWrapper>
    </Wrapper>
  );
}
