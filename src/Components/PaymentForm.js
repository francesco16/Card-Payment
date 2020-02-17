import React, {useState} from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import {ButtonWrapper} from './Button';
import useForm from './useForm';
import validate from './Validate';
import Card from './Card';

const FormWrapper = styled.form`
  width: 50%;
  height: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const SubmitButton = styled(ButtonWrapper)`
  position: absolute;
  bottom: 0;
  right: -25%;
  margin-right: -60px;
`;
const BackButton = styled(ButtonWrapper)`
  position: absolute;
  bottom: 0;
  right: -75%;
  margin-right: -60px;
`;
const Error = styled.p`
  margin-top: 0px;
  font-size: 12px;
  font-weight: bold;
  color: red;
`;
export default function PaymentForm(props) {
  const {handleChangeOnlyLetters, 
        handleChangeOnlyNumbers, 
        handleChangeSpaced4, 
        handleChangeSpaced2, 
        handleSubmit, 
        values, 
        errors} = useForm(submit, validate)
  const [cvcFocused, setcvcFocused] = useState(false);
  const handleFocus = ()=> setcvcFocused(!cvcFocused);
  const handleFocusOut = ()=> setcvcFocused(!cvcFocused);
  function submit(){
    console.log({
      'name' : values.Name, 
      'cardNumber' : values.CardNumber.replace(/\s/g, ''), 
      'cardExpiringDate' : values.ExpiringDate.replace(/\s/g, ''), 
      'cardCVC' : values.Cvc,
      'total' : props.total 
    })
  }
  return (
    <>
    <FormWrapper onSubmit={handleSubmit} noValidate>
      <TextInput 
      inputColor={errors.Name ? 'red' : 'black'}
      name="Name"
      InputValue={values.Name}
      nameLabel="Name"
      type="text"
      onChangeCallback={handleChangeOnlyLetters}
      /> 
      {errors.Name && <Error>{errors.Name}</Error>}     
      <TextInput 
      inputColor={errors.CardNumber ? 'red' : 'black'}
      name="CardNumber"
      InputValue={values.CardNumber}
      nameLabel="Card Number"
      type="text"
      onChangeCallback={handleChangeSpaced4}
      inputMaxLength="25"
      />
      {errors.CardNumber && <Error>{errors.CardNumber}</Error>}     
      <TextInput 
      inputColor={errors.ExpiringDate ? 'red' : 'black'}
      name="ExpiringDate"
      InputValue={values.ExpiringDate}
      nameLabel="Expiring Date"
      type="text"
      onChangeCallback={handleChangeSpaced2}
      inputMaxLength="6"
      />
      {errors.ExpiringDate && <Error>{errors.ExpiringDate}</Error>}     
      <TextInput
      inputColor={errors.Cvc ? 'red' : 'black'} 
      name="Cvc"
      InputValue={values.Cvc}
      nameLabel="CVC"
      type="text"
      onChangeCallback={handleChangeOnlyNumbers}
      onFocusCallback={handleFocus}
      onFocusOutCallback={handleFocusOut}
      inputMaxLength="3"
      />
      {errors.Cvc && <Error>{errors.Cvc}</Error>}     
      <SubmitButton 
      type="submit"
      >
        pay now
      </SubmitButton>
      <BackButton
      disabled
      >
        back
      </BackButton>
    </FormWrapper>
    <Card 
    val={values}
    isCvcFocused={cvcFocused}
    total={props.total}
    />
    </>
  )
}
