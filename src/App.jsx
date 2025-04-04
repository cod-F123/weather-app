import styled from "./App.module.css";
import Nav from "./components/nav/Nav";
import WeatherApi from "./api/service/APIserevice";

function App() {

    const handleInput = async (e)=>{
        const cityName = document.getElementById("data").value ;
        const data = await WeatherApi(cityName);
        console.log(data);
    }

    return (
        <div id="body" aria-valuetext="light" className={styled.bodyWrapper}>
            <Nav />
            <div className={styled.inputWrapper}>
                <div>
                    <label>Enter your city name :</label>
                    <input id="data" required type="text" />
                </div>
                <button onClick={handleInput}>submit</button>
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
