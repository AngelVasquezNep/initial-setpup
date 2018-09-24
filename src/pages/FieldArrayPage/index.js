import React, { PureComponent } from "react";
import FieldArrayComponent from "../../app/components/FieldArrayComponent";

export default class FieldArrayPage extends PureComponent {
  render() {
    return <FieldArrayComponent onSubmit={values => console.log(values)} />;
  }
}
