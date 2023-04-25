import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { DataProvider } from '../context/counterContext';
import DataContext from '../context/counterContext';

const Home = () => {

    const [player, setPlayer] = useState("")
    const [data, setData] = useState([])
    const [search, setSearch] = useState([])
    const [route, setRoute] = useState("hitters")
    
    const { counter, setCounter } = useContext(DataContext)

    console.log("context ==> ",useContext(DataContext))

    // console.log("counter ==> ", counter)

    useEffect(() => {

        console.log(route)

        const fetchData = async () => {

            console.log("route ==> ", route)

            const result = await axios({
                method: "get",
                url: `https://4733-196-70-0-66.ngrok-free.app/${route.toLowerCase()}`,
                headers: {
                    "Content-Type": "application/json"
                },
            })

            setData(result.data)

            console.log(result.data)

            console.log(data)

        }

        fetchData()

    }, [route])

    const handleSearch = (name) => {

        setPlayer(name)

        const searchResult = data.filter(dt => dt.Name.startsWith(name))

        setSearch(searchResult)

    }

  return (
      <div className='flex h-screen w-screen items-center justify-center flex-col gap-5'>
            <DataProvider>
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
                <Link to={`/${route}/${player.toString()}`} className='cursor-pointer p-2 py-4 bg-blue-800 hover:bg-blue-700 duration-200 text-white rounded-lg' onClick={() => setCounter(counter + 1)} >Generate</Link>
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
    </DataProvider>
        </div>
  )
}

export default Home