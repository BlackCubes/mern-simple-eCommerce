import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, FormStyled, FormGroupStyled } from '../common';

import { Input } from '../Components';

import { fieldInputErrors, fieldInputProperties, regex } from '../utils';

const FormContainer = ({ onSubmit, formFields }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  // const errors = {};

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'firstname':
        if (!value.length)
          setErrors((err) => ({
            ...err,
            [name]: 'Required',
          }));
        else if (value.length < 2)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be a minimum of 2 characters.',
          }));
        else if (value.length > 20)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be less than or equal to 20 characters.',
          }));
        else if (!regex.name.test(value))
          setErrors((err) => ({
            ...err,
            [name]: 'Please use a valid first name.',
          }));
        else setErrors((err) => ({ ...err, [name]: '' }));
        break;

      case 'lastname':
        if (!value.length)
          setErrors((err) => ({
            ...err,
            [name]: 'Required.',
          }));
        else if (value.length < 2)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be a minimum of 2 characters.',
          }));
        else if (value.length > 40)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be less than or equal to 40 characters.',
          }));
        else if (!regex.name.test(value))
          setErrors((err) => ({
            ...err,
            [name]: 'Please use a valid last name.',
          }));
        else setErrors((err) => ({ ...err, [name]: '' }));
        break;

      case 'address':
        if (!value.length)
          setErrors((err) => ({
            ...err,
            [name]: 'Required.',
          }));
        else if (value.length < 3)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be a minimum of 3 characters.',
          }));
        else if (value.length > 96)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be less than or equal to 96 characters.',
          }));
        else if (!regex.address.test(value))
          setErrors((err) => ({
            ...err,
            [name]: 'Please use a valid address.',
          }));
        else setErrors((err) => ({ ...err, [name]: '' }));
        break;

      case 'city':
        if (!value.length)
          setErrors((err) => ({
            ...err,
            [name]: 'Required.',
          }));
        else if (value.length < 3)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be a minimum of 3 characters.',
          }));
        else if (value.length > 50)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be less than or equal to 50 characters.',
          }));
        else if (!regex.city.test(value))
          setErrors((err) => ({
            ...err,
            [name]: 'Please use a valid city.',
          }));
        else setErrors((err) => ({ ...err, [name]: '' }));
        break;

      case 'state':
        if (!value.length)
          setErrors((err) => ({
            ...err,
            [name]: 'Required.',
          }));
        else if (value.length !== 2)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be 2 characters long.',
          }));
        else if (!regex.state.test(value))
          setErrors((err) => ({
            ...err,
            [name]: 'Please provide a valid US state.',
          }));
        else setErrors((err) => ({ ...err, [name]: '' }));
        break;

      case 'zipcode':
        if (!value.length)
          setErrors((err) => ({
            ...err,
            [name]: 'Required',
          }));
        else if (value.length !== 5)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be 5 characters long',
          }));
        else if (!regex.zipcode.test(value))
          setErrors((err) => ({
            ...err,
            [name]: 'Please provide a valid US ZIP code.',
          }));
        else setErrors((err) => ({ ...err, [name]: '' }));
        break;

      default:
        break;
    }

    setValues((val) => ({ ...val, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  const inputProperties = formFields.map((prop) =>
    fieldInputProperties({
      type: prop.type,
      name: prop.name,
      id: prop.id,
      errors: errors,
      values: values,
      placeholder: prop.placeholder,
      onChange: handleChange,
      noValidate: prop.noValidate,
      message: prop.message,
      addlstyle: prop.addlstyle,
    })
  );

  const inputErrors = formFields.map((prop) =>
    fieldInputErrors(prop.name, errors)
  );

  return (
    <FormStyled onSubmit={handleSubmit} noValidate>
      {inputProperties.map((prop, key) => {
        const ind = key;
        return (
          <FormGroupStyled key={ind} addlstyle={prop.addlstyle}>
            <Input inputprop={prop} errors={inputErrors[key]} />
          </FormGroupStyled>
        );
      })}

      <FormGroupStyled
        addlstyle={{ padding: '0 0.75rem', '> button': { width: '100%' } }}
      >
        <Button
          rest={{
            type: 'button',
          }}
        >
          Save
        </Button>
      </FormGroupStyled>
    </FormStyled>
  );
};

FormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formFields: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FormContainer;
