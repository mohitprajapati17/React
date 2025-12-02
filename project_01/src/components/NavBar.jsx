

function NavBar() {
  return (
    <div className=" p-4 flex items-center justify-between ">
        <div>
            <h2 className ="text-sm font-semibold  rounded-full bg-black text-white py-2 px-4 cursor-pointer  mt-2 ml-12 uppercase"> Target Audience </h2>
        </div>
        <div>
            <h2 className="text-sm font-semibold  rounded-full bg-gray-200 text-black py-2 px-4 cursor-pointer  mt-2 mr-15 uppercase">Digital Banking platform</h2>
        </div>
      
    </div>
  )
}

export default NavBar