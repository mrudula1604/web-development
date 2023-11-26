/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Tiles.css";
import classNames from 'classnames'
import { Link, NavLink } from "react-router-dom";

const Tiles = (props) => {

    const [weatherData, setWeatherData] = useState(props)

    console.log({ weatherData });

    return (
        <>
            <div className="tiles-container">
            
                <img src="https://store-images.s-microsoft.com/image/apps.16894.c02476d2-2378-4f60-8290-b6d4b3842643.79a2ef6a-4775-4c79-8d93-9caf077660eb.1bbd88a4-0a17-4750-91a0-cd7d98f58e9d" width={100} alt="" />
                
                <div className="overlay">
                    <p className="maxT">{(((weatherData.data[0].main.temp_max) - 273.15) * 9 / 5).toFixed(2)}* F </p>
                    <p className="minT"> {(((weatherData.data[0].main.temp_min) - 273.15) * 9 / 5).toFixed(2)}* F</p>
                </div>
                

                    <p className="date"><Link to={"details/" + weatherData.date.split("/").join("-")} state={weatherData}>{weatherData.date}</Link> <img src={"https://openweathermap.org/img/w/"+weatherData.data[0].weather[0].icon+".png"} alt="" srcSet="" /></p>
                
            </div>
        </>
    )
}

export default Tiles;