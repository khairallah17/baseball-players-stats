import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { DataProvider } from '../context/counterContext';
import DataContext from '../context/counterContext';
import {hitters} from "../data/hitters"
import { pitchers } from "../data/pitchers"
import FixedCounter from '../components/FixedCounter';

const Home = () => {

    const [player, setPlayer] = useState("")
    const [data, setData] = useState([])
    const [search, setSearch] = useState([])
    const [route, setRoute] = useState("hitters")
    
    const { counter, setCounter, error, setError } = useContext(DataContext)

    // console.log("context ==> ",useContext(DataContext))

    console.log("counter ==> ", counter)

    useEffect(() => {

        if (route == "hitters")
            setData(hitters)
        else if (route == "pitchers")
            setData(pitchers)

    }, [route])

    const handleSearch = (name) => {

        setPlayer(name)

        const searchResult = data.filter(dt => dt.Name.startsWith(name))

        setSearch(searchResult)

    }

    const handleLimit = () => {
        const rateLimit = async () => {
            await fetch("http://localhost:3000/")
                .then(response => response.json())
                .catch(err => setError(true))
        }

        if (!error)
            setCounter(counter + 1)

        rateLimit()
    }

  return (
      <div className='flex h-screen w-screen items-center justify-center flex-col gap-5 relative'>
        <FixedCounter/>
            <div className="navigation">
                <ul className='flex items-start justify-start w-full gap-5 my-4'>
                    <li>
                        <Link className={`border-b pb-1 duration-200 ${route.toLowerCase() == "hitters" ? "border-blue-800" : ""} `} onClick={(e) => setRoute(e.target.innerText)}>Hitters</Link>
                    </li>
                    <li>
                        <Link className={`border-b pb-1 duration-200 ${route.toLowerCase() == "pitchers" ? "border-blue-800" : ""} `} onClick={(e) => setRoute(e.target.innerText)}>Pitchers</Link>
                    </li>
                </ul>
                <h2>Search for the player that you want</h2>
                <div className="search--field flex items-center gap-2 border border-gray-300 rounded-lg p-3 bg-white mb-5">
                    <input type="text" placeholder='enter the name here' className= 'outline-none' onChange={(e) => handleSearch(e.target.value)} value={player} />
                </div>
                <Link to={error ? "/sorry" : `/${route}/${player.toString()}`} className='cursor-pointer p-2 py-4 bg-blue-800 hover:bg-blue-700 duration-200 text-white rounded-lg' onClick={handleLimit} >Generate</Link>
            </div>
            <div className="search--results h-full overflow-scroll text-start w-[278px] mt-4">
                <ul>
                    {
                        search.map((dt) => (
                        <li key={dt._id} onClick={() => setPlayer(dt.Name)}>
                            {dt.Name}
                        </li> 
                        ))
                    }
                </ul>
            </div>
        </div>
  )
}

export default Home