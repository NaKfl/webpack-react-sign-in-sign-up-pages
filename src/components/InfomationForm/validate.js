export const validate = (values) => {
  const errors = {};
  if (!values.gender) {
    errors.gender = 'Choose your gender';
  }
  if (!values.birthday){
    errors.birthday = 'Your birthday required';
  }
  return errors;
};