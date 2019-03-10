import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super();
    console.log(props);
  }
  render() {
    return <h1>app</h1>;
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
