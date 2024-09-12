import { useEffect, useState } from "react"

interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
}

export function Weather(){

  const [weatherData, setWeatherData] = useState<WeatherData>({
    main: {
      temp: 10
    },
    weather: [{ icon: "https://openweathermap.org/img/wn/weatherData.weather[0]?.icon.png" }]
  });

  // useEffect(() => {
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=48.866667&lon=2.333333&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`,
  //     {
  //       method:"GET"
  //     }
  //   )
  //   .then((res) => {
  //     if(res.status === 200){
  //       return res.json()
  //     }
  //     throw new Error('check api key')
  //   })
  //   .then((data) => {
  //     setWeatherData(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }, [])

  return (
    <div className="weather">
      <img 
        style={{
          width:'25px',
          height: '25px'
        }} 
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0]?.icon}.png`}
        // src={`https://openweathermap.org/img/wn/01n.png`}
        alt="weather details" 
      />
      <span className='color-subtitle2 font-semibold'>{Math.floor(weatherData?.main?.temp)}°</span>
    </div>
  )
}