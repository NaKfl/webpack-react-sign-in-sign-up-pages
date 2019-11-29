import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
// redux

// componenst
import InputField from '../InputField';
import UploadField from '../UploadField';
// validate
import { validate } from './validate';
//style
import './style.scss';

let InformationForm = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <Form onSubmit={handleSubmit}>

      <Field name="avatar" component={UploadField} type="file" />

      <Form.Group className='gender-container'>
        <Form.Label>Gender</Form.Label>
        <div>
          <Form.Label className='gender-container__option'>
            <Field name='gender' value='MALE' type='radio'
              component='input' /> Male
          </Form.Label>
          <Form.Label className='gender-container__option'>
            <Field name='gender' value='FEMALE' type='radio'
              component='input' /> Female
          </Form.Label>
        </div>
      </Form.Group>

      <Field name='dateOfBirth' label='Birthday' type='date'
        component={InputField} />

      <Field name='introVideoId' label='Intro video ID' type='text'
        component={InputField} />

      <Button type='submit' disabled={submitting} block>Next</Button>
    </Form>
  );
};

InformationForm.propTypes = {
  handleSubmit: PropTypes.any,
  submitting: PropTypes.any
};

export default reduxForm({
  form: 'infomation',
  validate
})(InformationForm);