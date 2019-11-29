export const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'First name required';
  } else if (/[0-9]/.test(values.firstName)) {
    errors.firstName = 'First name can\'t contain number';
  }

  if (!values.lastName) {
    errors.lastName = 'Last name required';
  } else if (/[0-9]/.test(values.lastName)) {
    errors.lastName = 'Last name can\'t contain number';
  }

  if (!values.email) {
    errors.email = 'Email required';
  }

  if (!values.password) {
    errors.password = 'Password required';
  } else if (values.password.length < 6) {
    errors.password = 'Password is too short';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'confirm password required';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Password mismatched';
  }
  return errors;
};