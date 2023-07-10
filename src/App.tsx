import "./App.css";
import User from "./components/user";

function App() {

  const name = "Hayley";
  const age = 7;

  return (
    <div className="App">
      <h1>Welcome!!!</h1>
      <User name={name} age={age}/>
    </div>
  );
}

export default App;
