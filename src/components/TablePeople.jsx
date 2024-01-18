import React,{useEffect, useState} from 'react'
// import {process, env } from 'process'
export default function TablePeople() {

// const [city,setCity] = useState('Toronto')



const fetchWeather =async (city)=>{

  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
    const options = {
        method: 'GET',
        
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        console.log(result.main.temp);
        return { 
          city:city,
           temperature:result.main.temp,
        }
    } catch (error) {
        console.error(error);
    }
}

const weatherData = []

const fetchWeatherCities = async(cities)=>{
 

  for (const city in cities){
    const result = await fetchWeather(city)
    weatherData.push(result)
  }
  console.log(weatherData)
 
}

useEffect(()=>{
fetchWeatherCities(cities)

},[])

 const cities = ['Toronto', 'Vancouver', 'Miami', 'Chicago']   

  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>City</th>
                <th>Temperature</th>
                
            </tr>
        </thead>
        <tbody>
           {
            cities.map((idx,city)=>{
              return(
                <>
                <tr key={idx}>
                  <td>{city}</td>
                  <td></td>
                </tr>
                </>
              )
            })
           }     
            <tr>

            </tr>
        </tbody>
      </table>
    </div>
  )
}
