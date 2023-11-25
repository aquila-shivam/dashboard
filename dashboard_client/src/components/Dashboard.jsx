import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import axios from 'axios'
function Dashboard() {

  const [data,setData] = useState(null);
  const [totalCountry,setTotalCountry] = useState(null);


  useEffect(()=>{

    const fetchData = async () =>{

      try {
        const response = await axios.get('http://localhost:8000/api/data/');
        setData(response.data)
        countCountry();
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  },[])

  const countCountry = ()=>{
    const countries = new Set(data.map(item => item.country));
    setTotalCountry(countries.size);
  }
  



  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
      <h2>Dashboard</h2>

      <div className="flex space-x-8 py-6">
        <div className="flex flex-col rounded-md border w-[400px] h-[150px] p-8 justify-center">
          <h2>Total Country</h2>
          <p className="text-gray-500 mt-3">{totalCountry}</p>
        </div>
      </div>
      <div className="flex space-x-8 py-6 w-4/5">
        <div className="flex flex-col rounded-md border w-full p-8 justify-center">
          Expenses Graph
          <Chart data = {data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;