import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
// conponents
import InputField from '../InputField';
import { validate } from './validate';

let SignUpForm = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <Form onSubmit={handleSubmit}>

      <Field name='firstName' label='First name' type='text'
        component={InputField} />

      <Field name='lastName' label='Last name' type='text'
        component={InputField} />

      <Field name='email' label='Email' type='email'
        component={InputField} />

      <Field name='password' label='Password' type='password'
        component={InputField} />

      <Field name='confirmPassword' label='Confirm password' type='password'
        component={InputField} />

      <Button type='submit' disabled={submitting} block>Sign Up</Button>
    </Form>
  );
};

SignUpForm.propTypes = {
  handleSubmit: PropTypes.any,
  submitting: PropTypes.any
};

export default reduxForm({
  form: 'signUp',
  validate
})(SignUpForm);