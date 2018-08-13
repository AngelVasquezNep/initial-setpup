import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import FieldText from "@atlaskit/field-text";

class FieldTextControlled extends Component {
  render() {
    const {
      input: { value, ...restInput },
      meta,
      ...rest
    } = this.props;
    console.log(value);
    return (
      <FieldText
        {...restInput}
        {...meta}
        {...rest}
        value={value || "HASasDAsd"}
      />
    );
  }
}

class SimpleForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <div>
              <Field
                name="firstName"
                placeholder="hola"
                component={FieldTextControlled}
                helperText="helperText"
              />
            </div>
            <div>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <Field
                name="firstName"
                component={({ input }) => (
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Text input"
                        {...input}
                      />
                    </div>
                  </div>
                )}
                type="text"
                placeholder="First Name"
              />
            </div>
          </div>
          <div>
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
            <button
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Clear Values
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(SimpleForm);
