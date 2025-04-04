import styled from "./App.module.css";
import Nav from "./components/nav/Nav";

function App() {
    return (
        <div id="body" aria-valuetext="light" className={styled.bodyWrapper}>
            <Nav />
            <div className={styled.inputWrapper}>
                <div>
                    <label>Enter your city name :</label>
                    <input type="text" />
                </div>
                <button>submit</button>
            </div>
            <div className={styled.resultWrapper}>
                <h3 id="city">
                    city name
                </h3>
                <div id="data">

                </div>
            </div>
        </div>
    );
}

export default App;
