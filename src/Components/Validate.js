export default function validate (values){
  const {Name, CardNumber, ExpiringDate, Cvc} = values;
  let errors = {};
  const todaysDate = new Date();
  const inputDate = [
                    parseInt(ExpiringDate.replace(/\s/g, '').toString().substr(0,2)), 
                    parseInt(ExpiringDate.replace(/\s/g, '').toString().substr(2,2))
                    ];
  const todaysDateFormatted = [
                              todaysDate.getMonth() + 1, 
                              parseInt(todaysDate.getFullYear().toString().substr(2,2))
                              ];
  if (!Name){
    errors.Name = "Name is required";
  } else if (! /^[a-zA-Z\s]+$/.test(Name)){
    errors.Name = "Invalid Name";
  };
  if (!CardNumber){
    errors.CardNumber = "Card number is required";
  } else if (CardNumber.length < 25 || CardNumber.length > 25){
    errors.CardNumber = "Invalid card number";
  };
  if (!ExpiringDate){
    errors.ExpiringDate = "Expiring date is required";
  } else if (ExpiringDate.length < 6 || ExpiringDate.length > 6){
    errors.ExpiringDate = "Invalid expiring date";
  } else if (inputDate[0] > 12){
    errors.ExpiringDate = "Expiring date format must be mm/yy";
  };
  if (inputDate[1] < todaysDateFormatted[1]){
    errors.ExpiringDate = "Expiring date can't be in the past"
  } else if (inputDate[0] < todaysDateFormatted[0]){
    errors.ExpiringDate = "Expiring date can't be in the past"
  };
  if (!Cvc){
    errors.Cvc = "CVC number is required";
  } else if (Cvc.length < 3 || Cvc.length > 3){
    errors.Cvc = "Invalid CVC number";
  } 
  return errors
}