import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from 'react-router-dom'
import Redbox from "redbox-react";
import OuterContainer from "./site-components/OuterContainer";

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

const render = () => {
  ReactDOM.render(
    <AppContainer errorReporter={CustomErrorReporter}>
      <BrowserRouter>
        <OuterContainer />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById("root"),
  );
}

render(); 

if (module.hot) {
  module.hot.accept('./site-components/OuterContainer', () => {
    render()
  });    
}
