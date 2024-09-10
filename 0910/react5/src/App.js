import "./App.css";

function App() {
  let count = 9824;

  const plus = () => {
    count += 1;
    console.log(count);
  };

  const minus = () => {
    count -= 1;
    console.log(count);
  };

  return (
    <div className="App">
      <h1>염동훈의 나이는?!</h1>
      <h2 style={{ color: "crimson" }}>{count}세</h2>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default App;
