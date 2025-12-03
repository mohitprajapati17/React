import { useState } from 'react'


import './App.css'
import axios from 'axios';

function App() {
  const [data , setData]=useState([]);


  const  handleClick= async ()=>{
    const res= await  axios.get("https://picsum.photos/v2/list?page=2&limit=100");
    console.log(res.data);
    setData(res.data);
  }
  


  return (
    <>
    <div className ="bg-black  text-white  h-screen ">
      <button onClick  ={()=>{handleClick()}} className =" m-4 p-4 bg-green-200  text-black  rounded-lg active:scale-95 transition-transform ">
        Get data
      </button>

      <div className="h-screen bg-gray-800  flex items-center gap-10 flex-wrap px-10  py-8  overflow-y-auto">
        {data.map((item :any , id:number)=>{
          return <div key={id}>
            <a href={item.download_url} target="_blank" rel="noopener noreferrer">
              <div className="flex-shrink-0">
                <img src={item.download_url} alt={`Image ${id}`}   className ="h-60 w-70 object-cover rounded-lg shadow-lg"/>
              </div>
            </a>
          </div>
        })}
       
      </div>

    </div>
      
    </>
  )
}

export default App
