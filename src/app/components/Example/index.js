import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sauceActionsCreate } from "../../store/reducers/sauce";

class Example extends Component {
  render() {
    return (
      <div className="Example">
        <h1>A New Hope</h1>
        <button
          onClick={() => this.props.actions.reduxSauce("hola", "secondParam")}
        >
          hola
        </button>
        To get started, edit <code>src/Example.js</code> and save to reload.
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        reduxSauce: sauceActionsCreate.reduxSauce
      },
      dispatch
    )
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Example);
