import {useState} from 'react';

const useForm = (callback, validate) =>{
  const [values, setValues] = useState({Name:"", CardNumber:"", ExpiringDate:"", Cvc:""});
  const [errors, setErrors] = useState({});
  const handleChangeOnlyLetters = event=>{
    const {name, value} = event.target;
    const regex = /^[a-zA-Z\s]+$/;
    if(!value || regex.test(value)){
      setValues({
        ...values,
        [name] : value
      })
    } 
  }
  const handleChangeOnlyNumbers = event=>{
    const {name, value} = event.target;
    const regex = /[0-9]|\./;
    if(!value || regex.test(value)){
      setValues({
        ...values,
        [name] : value
      })
    }
  }
  const handleChangeSpaced4 = event=>{
    let {name, value} = event.target;
    setValues({
      ...values,
      [name] : value.replace(/[^\d1-9]/g, '').replace(/(.{4})/g, '$1   ').trim()
    })
  }
  const handleChangeSpaced2 = event=>{
    let {name, value} = event.target;
    setValues({
      ...values,
      [name] : value.replace(/[^\d1-9]/g, '').replace(/(.{2})/g, '$1  ').trim()
    })
  }
  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validate(values))
    let valid = validate(values)
    if(Object.keys(valid).length > 0){
      return
    }
    callback()
  }
  return {
    handleChangeOnlyLetters,
    handleChangeOnlyNumbers,
    handleChangeSpaced4,
    handleChangeSpaced2,
    handleSubmit,
    values,
    errors
  }
}
export default useForm