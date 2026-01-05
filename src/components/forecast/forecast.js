import './forecast.css';
import { useState } from 'react';

const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEKDAYS.slice(dayInWeek, WEEKDAYS.length).concat(WEEKDAYS.slice(0, dayInWeek))
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
        <label className='title'>Daily</label>
        {data.daily.slice(1, 8).map((item, index) => (
            <div key={index}>
                <div
                    className="daily-item"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}/>

                    <label className="day">{forecastDays[index]}</label>
                    <label className="desc">{item.weather[0].description}</label>
                    <label className="min-max">{Math.round(item.temp.min)}°C / {Math.round(item.temp.max)} °C</label>
                </div>

                {openIndex === index && (
                    <div className="daily-details-grid">
                        <div className="daily-details-grid-item">
                            <label>UV index:</label>
                            <label>{Math.round(item.uvi)}</label>
                        </div>
                        <div className="daily-details-grid-item">
                            <label>Humidity:</label>
                            <label>{item.humidity}%</label>
                        </div>
                        <div className="daily-details-grid-item">
                            <label>Precipitation:</label>
                            <label>{item.pop * 100}%</label>
                        </div>
                        <div className="daily-details-grid-item">
                            <label>Wind:</label>
                            <label>{Math.round(item.wind_speed * 3.6)} kph</label>
                        </div>
                    </div>
                )}
            </div>
        ))}
    </div>
  )
}

export default Forecast