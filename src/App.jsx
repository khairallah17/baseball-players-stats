import { useState, useEffect } from 'react'
import './App.css'
import { LineWave } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

function App() {
  
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 3000)

  },[])

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {
        loading ?       <LineWave
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor="red"
        middleLineColor="gray"
        lastLineColor="red"
      /> : navigate('/home')
      }
    </div>
  )
}

export default App
