import styled from "./App.module.css";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div id="body" aria-valuetext="light" className={styled.bodyWrapper}>
      <Nav />
    </div>
  );
}

export default App;
