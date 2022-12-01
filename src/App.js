import Button from "./Component/Button";
import Divider from "./Component/Divider/Index";

function App() {

  const firstHandler = () => {
    console.log("first handler")
  }
  const secondHandler = () => {
    alert("second handler")
  }
  return (
    <div className="App " style={{ display: "flex" }}>
      <div>

        <p className="heading">hello</p>
        {/* <p className="heading">hello</p>
      <p className="subheading">hello</p> */}
        <p className="paragraph">helloo</p>
      </div>
      <div>

        <Button text="Submit" styleClass="common-btn first-btn" oK={() => firstHandler()} />{" "}
        <Divider styleClass="divider-vr" />
        {/* <Divider styleClass="divider-hr" /> */}
        <Button text="Cancel" styleClass="common-btn second-btn" oK={() => secondHandler()} />{" "}
        <Button text="Cancel" styleClass="common-btn " />
      </div>
    </div>
  );
}

export default App;
