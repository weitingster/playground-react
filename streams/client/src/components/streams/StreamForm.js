import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header"> {error} </div>
        </div>
      );
    }
  }

//this produced an error message related to property so we changed it to the arrow function
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error': ''}`;

    return (
      <div className={className}>
      <label>{label}</label>
      <input {...input} />
      {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form
      onSubmit={this.props.handleSubmit(this.onSubmit)}
      className="ui form error"
      >
        <Field
        name="title"
        component={ this.renderInput }
        label="Enter Title"
        />
        <Field
        name="description"
        component={ this.renderInput }
        label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

//handles error messages when user didn't type in an appropriate title or description
const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Please type in a title';
  }

  if (!formValues.description) {
    errors.description = "Please enter a description";
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);
