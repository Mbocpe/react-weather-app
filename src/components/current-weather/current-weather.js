import "./current-weather.css"

const CurrentWeather = () => {
  return (
    <div className="weather">
        <div className="top">
            <div>
                <p className="city">Brisbane</p>
                <p className="weather-desc">Hot as hell</p>
            </div>
            <img alt="weather" className="weather-icon" src="icons/01d.png"/>
        </div>

        <div className="bottom">
            <p className="temp">34°C</p>
            <div className="details">
                <div className="parameter-row">
                    <span className="parameter-label">Feels like</span>
                    <span className="parameter-value">38°C</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Wind</span>
                    <span className="parameter-value">6 km/h</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Humidity</span>
                    <span className="parameter-value">67%</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Pressure</span>
                    <span className="parameter-value">15 hPa</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CurrentWeather