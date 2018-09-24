import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./app/styles/index.css";

import SimpleForm from "./app/components/SimpleForm";

import FieldArrayPage from "./pages/FieldArrayPage";

const RootRouter = () => (
  <Router>
    <div style={{ display: "flex" }}>
      <div className="navigation-wrapper">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/form">form</Link>
            </li>
            <li>
              <Link to="/field-array">Field Array</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/field-array" component={FieldArrayPage} />
      <Route
        path="/form"
        render={() => <SimpleForm onSubmit={values => console.log(values)} />}
      />
    </div>
  </Router>
);

const Home = () => <h2>Home</h2>;

const About = () => <h2>About</h2>;

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
    <Link to={`${match.url}/components`}>Components</Link>
    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
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
