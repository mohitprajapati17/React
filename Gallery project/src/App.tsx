import { useState, useEffect } from 'react'


import './App.css'
import axios from 'axios';

function App() {
  const [data , setData]=useState<any[]>([]);
  const [page, setPage] = useState<number>(1);



  useEffect(() =>{
    const getData =async()=>{
      const res= await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=100`);
    console.log(res.data);
    setData(res.data);
    }
    
    getData();
  }, [page]);

  return (
    <>
    
      

      <div className="h-screen bg-gray-800  flex items-center gap-10 flex-wrap px-10  py-8  overflow-y-auto">
        {data.map((item :any , id:number)=>{
          return <div key={id}>
            <a href={item.download_url} target="_blank" rel="noopener noreferrer">
              <div className="flex-shrink-0">
                <img src={item.download_url} alt={`Image ${id}`}   className ="h-60 w-70 object-cover rounded-lg shadow-lg"/>
              </div>
              
            </a>
            <h1 className="text-black text-sm mt-2 bg-white p-2 rounded-lg text-center">{item.author}</h1>
          </div>
        })}

        <div className ="flex items-center justify-center p-4  gap-8 min-h-16 w-full">
        <button onClick={() => setPage(page + 1)} className="bg-white text-black px-4 py-2 rounded-lg">
          Next 
        </button>
      </div>
       
      </div>

      

    
      
    </>
  )
}

export default App
