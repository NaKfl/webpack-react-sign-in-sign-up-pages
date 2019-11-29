import React from 'react';
import { Form, FormControl} from 'react-bootstrap';
import PropTypes from 'prop-types';

const InputField = ({ input, label, type, meta: { touched, error } }) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    <FormControl {...input} placeholder={label} type={type} />
    {touched && (error && <Form.Text className='text-danger'>{error}</Form.Text>)}
  </Form.Group>
);

InputField.propTypes ={
  label: PropTypes.any,
  input: PropTypes.any,
  type: PropTypes.any,
  meta: PropTypes.any
};

export default InputField;