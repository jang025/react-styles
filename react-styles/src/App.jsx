import "./App.css";
import Button1 from "./components/example-1-normal-css/Button.jsx";
import Button2 from "./components/example-2-inline-css/Button.jsx";
import Button3 from "./components/example-3-styled-components/Button.jsx";
import Button4 from "./components/example-4-css-modules/Button.jsx";
import Button5 from "./components/example-5-sass/Button.jsx";
// Later on, we'll import button components here

const App = () => {
  return (
    <div className="App">
      <Button1 buttonText="Example 1" />
      <Button2 buttonText="Example 2" />
      <Button3 buttonText="Example 3" />
      <Button4 buttonText="Example 4" />
      <Button5 buttonText="Example 5" />
    </div>
  );
};

export default App;
