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
      temp: 20
    },
    weather: [{ icon: "https://openweathermap.org/img/wn/weatherData.weather[0]?.icon.png" }]
  });

  // useEffect(() => {
  //   fetch('https://api.openweathermap.org/data/2.5/weather?lat=48.866667&lon=2.333333&units=metric&appid=3e169307cf072d9b39b2ed3a92104a01',
  //     {
  //       method:"GET"
  //     }
  //   )
  //   .then((res) => {
  //     return res.json()
  //   })
  //   .then((data) => {
  //     setWeatherData(data);
  //     console.log(data);
      
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }, [])

  return (
    <>
      <img 
        style={{
          width:'25px',
          height: '25px'
        }} 
        // src={`https://openweathermap.org/img/wn/${weatherData.weather[0]?.icon}.png`}
        src={`https://openweathermap.org/img/wn/01n.png`}
        alt="weather details" 
      />
      <p className="text-custom-gray text-deuns-xs">{Math.floor(weatherData?.main?.temp)}°</p>
    </>
  )
}