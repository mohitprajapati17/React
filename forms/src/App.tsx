import { useState } from 'react'



function App() {
  const [name, setName]=useState("");

  const handleForm=(e: React.FormEvent)=>{
    e.preventDefault();
    
    console.log("Form submitted with name:", name);
  };

  return (
    <>
      <div className="bg-blue-100 p-4 flex items-center justify-center h-screen w-screen">
        <form onSubmit={(e)=>{handleForm(e)}} className="bg-white p-6 rounded shadow-md">
          <input
            type="text"
            placeholder="Enter your name"
            className="border p-2 rounded w-64 block mb-4"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded block mx-auto mt-2 w-full">Submit</button>

        </form>
      </div>
      
    </>
  )
}

export default App
