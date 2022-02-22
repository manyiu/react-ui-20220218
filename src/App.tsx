import "./App.css";
import Button from "./components/Button";
import Hello from "./components/Hello";
import Slider from "./components/Slider";
import Paper from "./components/Paper";
const React = require("react");
const ReactDOM = require("react-dom");

if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button id="test" label="test" />
      <Hello id="hello" name="" color="yellow" />
      <Slider />
      <Paper>Test Content</Paper>
    </div>
  );
}

export default App;
