import './forecast.css';
import { useState } from 'react';

const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEKDAYS.slice(dayInWeek, WEEKDAYS.length).concat(WEEKDAYS.slice(0, dayInWeek))
//   const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
        <label className='title'>Daily</label>
        {data.list.slice(0, 7).map((item, index) => (
            <div key={index}>
                <div className="daily-item">
                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}/>

                    <label className="day">{forecastDays[index]}</label>
                    <label className="desc">{item.weather[0].description}</label>
                    <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)} °C</label>
                </div>

                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                        <label>Pressure:</label>
                        <label>{item.main.pressure}</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Humidity:</label>
                        <label>{item.main.humidity}</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Clouds:</label>
                        <label>{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Wind speed:</label>
                        <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Sea level:</label>
                        <label>{item.main.sea_level}m</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Feels like:</label>
                        <label>{item.main.feels_like}°C</label>
                    </div>
                </div>
            </div>
        ))}


{/* {data.list.slice(0, 7).map((item, idx) => (
  <div className="daily-item-wrapper" key={idx}>
    <div
      className="daily-item clickable"
      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
    >
      <img
        src={`icons/${item.weather[0].icon}.png`}
        className="icon-small"
        alt="weather"
      />
      <label className="day">{forecastDays[idx]}</label>
      <label className="description">{item.weather[0].description}</label>
      <label className="min-max">
        {Math.round(item.main.temp_max)}°C / {Math.round(item.main.temp_min)}°C
      </label>
    </div>

    {openIndex === idx && (
      <div className="daily-details-grid">
        <div className="daily-details-grid-item">
          <label>Pressure:</label>
          <label>{item.main.pressure}</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Humidity:</label>
          <label>{item.main.humidity}</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Clouds:</label>
          <label>{item.clouds.all}%</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Wind speed:</label>
          <label>{item.wind.speed} m/s</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Sea level:</label>
          <label>{item.main.sea_level} m</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Feels like:</label>
          <label>{Math.round(item.main.feels_like)}°C</label>
        </div>
      </div>
    )}
  </div>
))} */}

    </div>
  )
}

export default Forecast