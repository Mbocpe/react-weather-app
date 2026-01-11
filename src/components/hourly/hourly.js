import './hourly.css'

const HOURS = ['12 am', '1 am', '2 am', '3 am', '4 am', '5 am', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am',
               '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm']

const Hourly = ({data}) => {
  const hourInDay = new Date().getHours();
  const forecastHours = HOURS.slice(hourInDay, HOURS.length).concat(HOURS.slice(0, hourInDay));

  return (
    <div>
        <label className='title'>Hourly</label>
        <div className='hourly-grid'>
            {data.hourly.slice(1, 24).map((item, index) => (
                <div key={index}>
                    <div className="hourly-item">
                        <label className="hour">{forecastHours[index]}</label>
                        <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}/>
                        <label className='hour-temp'>{Math.round(item.temp)}°</label>
                        <label className='pre'>{Math.round(item.pop * 100)}%</label>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Hourly