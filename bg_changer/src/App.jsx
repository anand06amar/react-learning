import { useState } from 'react'

function App() {
  const [color, setCount] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed bottom-0 left-0 w-full">
  <div className="flex justify-evenly">
    <button 
    onClick={()=>{setCount("pink")}}
    className="px-4 py-2 bg-pink-300 text-gray-800 border border-gray-400 rounded-md">pink</button>
    <button
    onClick={()=>{setCount("green")}}
    
    className="px-4 py-2 bg-green-300 text-gray-800 border border-gray-400 rounded-md">GREEEN</button>
    <button
    onClick={()=>{setCount("red")}}
    className="px-4 py-2 bg-red-300 text-gray-800 border border-gray-400 rounded-md">RED</button>
    <button
    onClick={()=>{setCount("blue")}}
    className="px-4 py-2 bg-blue-300 text-gray-800 border border-gray-400 rounded-md">BLUE</button>
  </div>
</div>



    </div>
    
  )
}

export default App
