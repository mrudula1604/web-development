import { useLocation, useParams } from "react-router-dom"
import "./Details.css"

const Details = (props) => {

    const { date } = useParams()
    const location = useLocation();
    const data = location.state
    console.log({ date, data });

    return (
        <div className="flex-wrapper">
            <div className="heading">
                <h1>Weather Forcasting - {date.split("-").join("/")} </h1>

                <div className="container flex-container mt-5">
                    {
                        data.data.map(forcast => {
                            let dateTime = new Date(forcast.dt_txt).toLocaleTimeString()
                            return (
                                <div className="card mx-5 mt-5" key={dateTime}>
                                    <div className="card-header">{dateTime}</div>
                                    <div className="card-body">
                                        <p className="maxT">Max: {(((forcast.main.temp_max) - 273.15) * 9 / 5).toFixed(2)}* F</p>
                                        <p className="minT">Min: {(((forcast.main.temp_min) - 273.15) * 9 / 5).toFixed(2)}* F</p>
                                    </div>
                                    <div className="card-footer">
                                        <img src={"https://openweathermap.org/img/w/" + forcast.weather[0].icon + ".png"} alt="" srcSet="" />
                                        {forcast.weather[0].description}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Details