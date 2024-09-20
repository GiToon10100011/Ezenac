import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Body from "./components/Body.js";
import SubBody1 from "./components/SubBody1.js";
import SubBody2 from "./components/SubBody2.js";
import SubBody3 from "./components/SubBody3.js";
import SubBody4 from "./components/SubBody4.js";
import SubBody5 from "./components/SubBody5.js";

const ChildComp = () => {
  return <div>child component</div>;
};
const ChildComp2 = () => {
  return <div>child component2</div>;
};

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Body>
          <ChildComp />
          <ChildComp2 />
        </Body>
        <SubBody1 />
        {/* <SubBody2 /> */}
        <SubBody3 />
        <SubBody4 />
        <SubBody5 />
        {/* <Body {...bodyProps} /> */}
        {/* <Body name={name} age={age} value={"true"} /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
