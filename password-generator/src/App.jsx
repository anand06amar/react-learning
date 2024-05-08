import { useState, useCallback, useEffect, useRef} from 'react'

import './App.css'

function App() {
  const [length, setlength ] = useState(8)
  const [num, setnum ] = useState(false)
  const [charallowed, setchar ] = useState(false)
  const [password, setpassword ] = useState("")

const passwordgenerator = useCallback (()=>{
  let pass =""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (num) str+="1234567890"
  if (charallowed) str+="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  for (let i =1; i<= length; i++){
    let char = Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
    

  }

  setpassword(pass)

},[length,num,charallowed,setpassword])


const copypasswordtotheclipboard = useCallback(()=>{
  passref.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passwordgenerator()
},
[length,num,charallowed,passwordgenerator])

const passref = useRef(null)

  return (
    <>
     <div className="w-full max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
  <label htmlFor="password" className="block mb-2">Password:</label>
  <input type="text" value={password} ref={passref} className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500" readOnly />

  <label htmlFor="length" className="block mb-2">Length:{length}</label>
  <input type="number" onChange={(e)=>{setlength(e.target.value)}} id="length" className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500" defaultValue="8" />

  <div className="flex items-center mb-4">
    <input type="checkbox" id="includeNumbers" onChange={()=>{
      setnum((prev)=> !prev);
    }}className="mr-2" />
    <label htmlFor="includeNumbers">Include Numbers</label>
  </div>

  <div className="flex items-center mb-4">
    <input type="checkbox" id="includeSpecialChars" 
    onChange={()=>{
      setchar((prev)=>!prev);
    }}
    
    className="mr-2" />
    <label htmlFor="includeSpecialChars">Include Special Characters</label>
  </div>

  <button onClick={copypasswordtotheclipboard}className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Copy</button>
</div>

  
    </>
  )
}

export default App
