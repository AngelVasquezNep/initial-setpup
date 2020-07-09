import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { hellosActionsCreate } from "./store/reducers/helloWorld.js";

import SimpleForm from "./app/components/SimpleForm";

const RootRouter = () => (
  <Router>
    <div>
      <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
      <Link to="/topics">Topics</Link> <Link to="/form">form</Link>
      <hr />
      <Route exact path="/" component={HomeConnected} />
      <Route path="/about" component={AboutConnected} />
      <Route path="/topics" component={Topics} />
      <Route
        path="/form"
        render={() => <SimpleForm onSubmit={(values) => console.log(values)} />}
      />
    </div>
  </Router>
);

const Home = ({ actions, helloWorldMessage, souceMessage, result }) => (
  <div>
    <h2>Home</h2>
    <p>{helloWorldMessage}</p>
    <p>{souceMessage}</p>
    <p>Result {result}</p>

    <button onClick={() => actions.changeMessage("HOLA Jorge")}>Change</button>
    <button onClick={() => actions.sum(10, 15)}>Sum</button>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        changeMessage: hellosActionsCreate.changeMessage,
        sum: hellosActionsCreate.sum,
      },
      dispatch
    ),
  };
};

const mapStateToProps = (state) => {
  return {
    souceMessage: state.sauce.msg,
    helloWorldMessage: state.helloWorld.message,
    result: state.helloWorld.result,
  };
};

const HomeConnected = connect(mapStateToProps, mapDispatchToProps)(Home);

const About = ({ souceMessage, helloWorldMessage, result }) => (
  <div>
    <h2>About</h2>
    <p>{result}</p>
  </div>
);

// const mapStateToProps = (state) => {
//   return {
//     souceMessage: state.sauce.msg,
//     helloWorldMessage: state.helloWorld.message,
//     result: state.helloWorld.result
//   }
// }

const AboutConnected = connect(mapStateToProps)(About);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <Link to={`${match.url}/rendering`}>Rendering with React</Link>{" "}
    <Link to={`${match.url}/components`}>Components</Link>{" "}
    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>{" "}
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => <h3>{match.params.topicId}</h3>;

export default RootRouter;
