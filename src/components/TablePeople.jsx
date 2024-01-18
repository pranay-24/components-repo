import React,{useEffect, useState} from 'react'
// import {process, env } from 'process'

export default function TablePeople() {

// const [city,setCity] = useState('Toronto')

const cities = ['Toronto', 'Vancouver', 'Miami', 'Chicago']   
const [weatherData, setWeatherData] = useState([])

const fetchWeather =async (city)=>{

  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
    const options = {
        method: 'GET',
        
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
       //console.log(result.main.temp);
        return { 
          city:city,
           temperature:result.main.temp,
        }
    } catch (error) {
        console.error(error);
    }
}



const fetchWeatherCities = async(cities)=>{


const data = []
  for (const city of cities){


    const result = await fetchWeather(city)
   // console.log(result)
    data.push(result)
  }
  setWeatherData(data)
  //console.log(weatherData)
 
}

useEffect(()=>{
  const fetchData = async()=>{
    await fetchWeatherCities(cities)
  }

fetchData();

},[])

const clsx =(...classes)=>{
return classes.filter(Boolean).join(" ")
}

  return (
    <div className=''>
      <table className='mx-auto text-3xl shadow-xl font-work border border-gray-500'>
        <thead className='bg-gray-200'>
            <tr className='border border-gray-500 p-5  '>
                <th className='border-b border-gray-500 p-5 w-[300px]'>City</th>
                <th className='border-b border-gray-500 p-5 w-[400px] '>Temperature</th>
                
            </tr>
        </thead>
        <tbody>
           {
            weatherData.map((data, idx)=>{
              return(
                  <tr className={clsx(idx%2 === 0 ? 'bg-slate-100':'', 'border-b border-gray-500 text-center  ')} key={idx}>
                  <td className='border-b border-gray-500 p-5 leading-6 tracking-wide '>{data.city}</td>
                  <td className='border-b border-gray-500 p-5 leading-6 tracking-wide'>{data.temperature}</td>
                </tr>
                
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
