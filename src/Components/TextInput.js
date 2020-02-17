import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 90%;
  height: 50px;
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  input{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    color: black;
    padding: 20px 0 0 10px;
    border: none;
    outline: none;
    font-size: 20px;
    &:focus + .label-name .content-name, &:valid + .label-name .content-name{
      transform: translateY(-150%);
      font-size: 14px;
    }
    &:focus + .label-name::after, .form input:valid + .label-name::after{
      transform: translateX(0%);
    }
  }
  label{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 2px solid ${props=>props.inputColor ? props.inputColor : 'black'};
    &::after{
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 100%;
      width: 100%;
      border-bottom: 2px solid blue;
      transform: translateX(-100%);
      transition: transform 0.2s ease;
    }
  }
  .content-name{
    position: absolute;
    bottom: 5px;
    left: 2px;
    transition: all 0.2s ease;
  }
`;
export default function TextInput(props) {
  return (
    <FormWrapper inputColor={props.inputColor}>
      <input 
      type={props.type} 
      name={props.name} 
      value={props.InputValue} 
      onChange={props.onChangeCallback}
      onFocus={props.onFocusCallback}
      onBlur={props.onFocusOutCallback}
      maxLength={props.inputMaxLength}
      autoComplete="off" 
      required 
      />
      <label htmlFor={props.name} className="label-name" >
        <span className="content-name">{props.nameLabel}</span>
      </label>
    </FormWrapper>
  )
}
