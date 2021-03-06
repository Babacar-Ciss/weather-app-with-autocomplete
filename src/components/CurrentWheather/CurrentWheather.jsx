import "./CurrentWheather.css";

const CurrentWheather = ({data}) => {

const icon = `icons/${data.weather[0].icon}.png`

return (
    <div className="weather">
        <div className="top">
            <div>
                <p className="city">{data.city}</p>
                <p className="weather-description">{data.weather[0].description}</p>
            </div>
            <img src={icon} alt="weather" className="weather-icon" />
           
        </div>

        <div className="bottom">
            <p className="temperture">{`${Math.floor(data.main.temp)}°C`}</p>
            <div className="details">
                <div className="parameter-row">
                    <span className="parameter-label">Details</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Feels like</span>
                    <span className="parameter-value"> {`${Math.floor(data.main.feels_like)}°C`}</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Wind</span>
                    <span className="parameter-value"> {`${Math.floor(data.wind.speed)} Km/H`}</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Humidity</span>
                    <span className="parameter-value"> {`${Math.floor(data.main.humidity)} %`}</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Pressure</span>
                    <span className="parameter-value"> {`${Math.floor(data.main.pressure)} Pa`}</span>
                </div>
            </div>
        </div>
    </div>
);


}

export default CurrentWheather;