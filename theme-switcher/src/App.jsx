import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './contexts/theme'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [ThemeMode, setTheme] = useState("light")
  const darkTheme=()=>{
    setTheme("dark")
  }
  const lightTheme=()=>{
    setTheme("light")
  }

//actual tranisition starts
  useEffect(() => {
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector('html').classList.add(ThemeMode)
  
    
  }, [ThemeMode])
  

  return (
    <ThemeContextProvider value={{ThemeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Button/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                 <Card/>
              </div>
          </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
