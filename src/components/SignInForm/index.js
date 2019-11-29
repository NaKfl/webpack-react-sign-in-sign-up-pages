import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
// componenst
import InputField from '../InputField';
// validate
import { validate } from './validate';

let SignInForm = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field name='email' label='Email' type='email'
        component={InputField} />

      <Field name='password' label='Password' type='password'
        component={InputField} />

      <Button type='submit' disabled={submitting} block>Sign In</Button>
    </Form>
  );
};

SignInForm.propTypes = {
  handleSubmit: PropTypes.any,
  submitting: PropTypes.any
};

export default reduxForm({
  form: 'signIn',
  validate
})(SignInForm);