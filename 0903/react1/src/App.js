import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Body from "./components/Body.js";

function App() {
  const name = "염동훈";
  const age = 73;
  const bodyProps = {
    name: "염동훈",
    age: 73,
    value: true,
    favorites: ["운동, ", "검은수염"]
  };
  return (
    <>
      <div className="App">
        <Header />
        <Body {...bodyProps} />
        {/* <Body name={name} age={age} value={"true"} /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
