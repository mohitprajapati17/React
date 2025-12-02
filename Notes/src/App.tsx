import { useState } from "react"

interface Note{
  title:string,
  content:string
}



function App() {
   const [title, setTitle] = useState("");
   const [content,setContent]=useState("");

   const [notes ,setNotes]=useState<Note[]>([]);

   const handleForm=(e: React.FormEvent)=>{
      e.preventDefault();
    // Handle form submission here
      const newNote=[...notes, { title, content }];
      setNotes(newNote);
 
      setTitle("");
      setContent("");
      console.log("Notes:", notes);
   }

   



  return (
    <>
    <div className="min-h-screen  bg-white flex items-center   justify-between bg-gray-500  text-black">


    <div className='h-screen   flex flex-col w-1/2 items-center justify-center '>
      <form onSubmit={handleForm} className="flex flex-col gap-4    mt-30  h-screen w-2/3">
        <input
         className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          type="text"
          placeholder="Enter note title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <textarea
        className="px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded"
         placeholder="Enter note content"
         value={content}
         onChange={(e)=>setContent(e.target.value)}
        >

        </textarea>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded  w-full">Add Note</button>
       

      </form>
    </div>


    <div className=" h-screen   h-96 w-1/2 p-4">
           <h1 className="text-4xl font-bold">Notes List</h1>
           <div className ="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto"> 
             {/* Sample note items */}
            {notes.map((item  ,idx)=>{
              return <div  key={idx}> 
                <div className="h-40 w-46 bg-white rounded shadow-md p-4">
               <h2 className="text-lg font-bold"> {item.title}</h2>
               <p className="text-gray-600">{item.content}</p>
             </div>
                </div>
               

            })}
             
           </div>
    </div>

    </div>
    
     
    </>
  )
}

export default App
