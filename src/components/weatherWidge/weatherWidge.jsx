import React from 'react';
import './weatherWidge.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons CSS

const WeatherCard = ({ weatherData }) => {
  const weatherIcons = {
    Clear: 'bi-sun',
    Clouds: 'bi-cloud',
    Rain: 'bi-cloud-rain',
    Smoke: 'bi-smoke', 
  };

  return (
    <div className="card">
      {weatherData && weatherData.weather[0] && (
        <>
          <div className="temp">TEMPRATURE: {weatherData?.main?.temp} °C  
          <i className={`bi ${weatherIcons[weatherData.weather[0].main]}`}> </i>

            
          </div>
          <br />
          <div>
          <i className=  {`bi bi-geo`}> </i>

           CITY NAME:    {weatherData?.name}

          </div>
          <div>
          <i className={`bi bi-globe`}  > </i>

            COUNTRY: {weatherData?.sys?.country}

          </div>
          <div>
          <i className={`bi bi-droplet`}  > </i>

            HUMIDITY: {weatherData?.main?.humidity}

          </div>
          <div>
          <i className={`bi bi-wind`}  > </i>
           
            WIND SPEED: {weatherData?.wind?.speed}

          </div>
          <div>
          <i className={`bi ${weatherIcons[weatherData.weather[0].main]}`} > </i>
            WEATHER: {weatherData?.weather[0]?.description}

          </div>
        </>
      )}
    </div>
  );
};

export default WeatherCard;

      
