import "./App.css";
import Button from "./Component/Button";

function App() {

  return <div className="App">
    <Button text="Click" oK={() => alert("Click")} />
    <Button text="me" oK={() => alert("me")} />
    <Button text="have" oK={() => alert("have")} />
    <Button text="nice" oK={() => alert("nice")} />
    <Button text="day" oK={() => alert("day")} />
    <Button text="lakhan" oK={() => alert("lakhan")} />
    <Button text="thank " oK={() => alert("thank")} />
    <Button text="You" oK={() => alert("You")} />
  </div>;
}

export default App;
