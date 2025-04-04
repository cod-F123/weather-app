import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";

// Basic requirement
const baseUrlWeather = "https://api.openweathermap.org/data/2.5";
const baseUrlLocation = "http://api.openweathermap.org/geo/1.0";
const APIKey = "910ea8a4d8d1e14f80885590fbbba732" ;

async function Location(cityName) {
    const client = axios.create({
        baseURL:baseUrlLocation
    });
    console.log("1")
    const data = await client(`/direct?q=${cityName}&limit=1&appid=${APIKey}`).then((res)=>{
        return res;
    }).catch((err)=>{
        console.log(3)
        return err;
    });

    return data.data[0];
}

async function WeatherApi(cityName) {
    const dataLocation = await Location(cityName);

    const client = axios.create({
        baseURL : baseUrlWeather
    });
    const data = await client(`/weather?lat=${dataLocation.lat}&lon=${dataLocation.lon}&appid=${APIKey}`).then((res)=>{
        return res;
    }).catch((err)=>{
        return err;
    });

    return data;
}

export default WeatherApi;