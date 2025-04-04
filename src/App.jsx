import styled from "./App.module.css";
import Nav from "./components/nav/Nav";
import WeatherApi from "./api/service/APIserevice";
import { useState } from "react";
import temp from "./assets/images/temp.png";
import wind from "./assets/images/wind.png";

function App() {

    const [loading,setLoading] = useState(true);
    const [data,setData] = useState({});

    const handleInput = async (e)=>{
        const cityName = document.getElementById("data").value ;
        const dataList = await WeatherApi(cityName);
        setData({
            ...dataList
        });
        setLoading(false)
    };


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
            {loading?(<div></div>) : (<div className={styled.resultWrapper}>
                <h3 id="city">
                    {data.name}
                </h3>
                <div className={styled.dataWrapper} >
                    <div><img src={temp} alt="temp" /><br /> <span>Min temp : {data.main.temp_min} T</span>  <span> Temp : {data.main.temp} T</span> <span> Max temp : {data.main.temp_max} T</span></div>
                    <div><img src={wind} alt="wind" /><br /> <span>Wind speed : {data.wind.speed} km/s</span>  <span> Wind deg : {data.wind.deg} </span></div>
                </div>
            </div>)}
        </div>
    );
}

export default App;
