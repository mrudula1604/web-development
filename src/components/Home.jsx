import axios from "axios"
import { useEffect, useState } from "react"
import Tiles from "./Tiles"
import "./Home.css"

 const Home = (props) => {
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)
    const [dates, setDates] = useState({})

    console.log({Home: props});

    const apiKey = "f0bded892f55787fbe508eb073036510"

    useEffect(() => {

        const successCallback = (position) => {
            console.log(position);
            setLat(() => position.coords.latitude)
            setLong(() => position.coords.longitude)
        };

        const errorCallback = (error) => {
            alert(error);
        };

        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


        axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`
        ).then((response) => {

            const datesObj = {}

            response.data.list.forEach(data => {
                let dateString = new Date(data.dt_txt).toLocaleDateString()

                if (datesObj[dateString]) {
                    datesObj[dateString].push(data)
                } else {
                    datesObj[dateString] = [data]
                }

            })

            setDates(() => datesObj)

        
        });
    }, [lat, long])


    return (
        <div className="App">
            <div className="flex-wrapper">
                <div className="heading">
                    <h1>Weather Forcasting Application</h1>
                </div>
                <div className="flex-container">
                    {
                        Object.keys(dates).map((date, index) => {
                            return (
                                <Tiles date={date} key={date} data={dates[date]}></Tiles>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    );
}

export default Home;