import React, { PureComponent } from "react";
import { reduxForm, Field, FieldArray } from "redux-form";
import "./generalStyles.css";
import options from "./options";

import { MultiSelect } from "react-selectize";

const RenderField = ({
  input: { value, onChange, onBlur, ...restInput },
  label,
  type,
  meta: { touched, error, warning },
  ...restProps
}) => {
  return (
    <MultiSelect
      options={options(5)}
      value={value}
      placeholder={label}
      {...restInput}
      onValuesChange={values => {
        onChange(values);
      }}
      {...restProps}
      // renderValue={item => <p>{item.label}</p>}
    />
  );
};

const renderFieldPw = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      {console.log(input.value.label)}
      <p>{input.value.label}</p>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

class PasswordsArray extends PureComponent {
  render() {
    const {
      passwords,
      fields,
      meta: { error }
    } = this.props;
    return (
      <div>
        <p>Passwords</p>
        {fields.map((pw, index) => {
          return <Field name={pw} component={renderFieldPw} />;
        })}
      </div>
    );
  }
}

class FieldArrayComponent extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div style={{ width: "100%" }}>
        <form onSubmit={handleSubmit}>
          <Field name="hola" component="input" />
          <hr />
          <Field
            name="password"
            label="Contraseñas"
            component={RenderField}
            onChange={(event, previusValue) => {
              console.log(previusValue);
            }}
          />
          <hr />
          <FieldArray name="password" component={PasswordsArray} />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "fieldArray"
})(FieldArrayComponent);
