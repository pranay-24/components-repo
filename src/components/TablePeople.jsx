import React,{useEffect} from 'react'
// import {process, env } from 'process'
export default function TablePeople() {


useEffect(()=>{

const fetchData =async ()=>{
    const url = 'https://linkedin-companies-data.p.rapidapi.com/?vanity_name=microsoft';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'linkedin-companies-data.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
 fetchData()   

},[])

    

  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th></th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>
           {/* {
            .map((idx,data)=>{

            })
           }      */}
            <tr>

            </tr>
        </tbody>
      </table>
    </div>
  )
}
