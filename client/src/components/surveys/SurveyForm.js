import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import validateEmails from '../../utils/validateEmails';
import SurveyField from './SurveyField';
import surveyFormFields from './surveyFormFields';

const SurveyForm = props => {
  const { handleSubmit } = props;

  const submitHandler = () => {
    props.onSurveySubmit();
  };

  const renderFields = () => {
    return (
      <div style={{ marginTop: '10px' }}>
        {surveyFormFields.map(field => (
          <Field
            key={field.name}
            type="text"
            name={field.name}
            label={field.label}
            component={SurveyField}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        {renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </>
  );
};

const validate = values => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  surveyFormFields.forEach(({ name, validationError }) => {
    if (!values[name]) {
      errors[name] = validationError;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
