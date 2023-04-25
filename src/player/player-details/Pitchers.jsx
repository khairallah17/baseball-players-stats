import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { LineWave } from 'react-loader-spinner'

const Pitchers = () => {

    const userId = useParams()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 3000)

        const fetchPlayer = async () => {

            try {
    
                const result = await axios({
                    method: "post",
                    url: " https://baseball-server.onrender.com//pitchers",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        name: userId.name
                    }
                })

                // const result = fetch('http://localhost:3000/pitchers',{
                //     method: "POST",
                //     headers: {
                //         accept: "application/json",
                //         "Content-Type": "application/json"
                //     },
                //     body: {
                //         name: userId.name
                //     },
                // })

                const dt = await result.data
    
                setData(dt)

                console.log("dt ==> ",dt)
    
                console.log("data ==> ",data)
    
            } catch (err) { 
                console.log(err.message)
            }
    
        }

        fetchPlayer()

    },[])

    const calculateDiff = (number) => {
        let percentage = parseFloat(number)
        percentage = (percentage * Math.floor(Math.random() * 8)) / 100
        
        let signe = Math.floor(Math.random() * 2) ? -1 : 1  
        let finalNumber = (percentage * signe) + parseFloat(number)
        
        return finalNumber.toFixed(2)
    }

    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center gap-4">
            {
                loading ? <LineWave
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
                            /> :
                            <>
                                <div className="player-head text-center">
                                    <h1 className='text-3xl font-bold'>{data[0].Name}</h1>
                                    <h3 className=' text-gray-400 text-xl'>{data[0].Team}</h3>
                                </div>
                                <div className="player-stats flex gap-5 justify-between w-[500px]">
                                    <div className="lift-stats">
                                        <ul className='flex flex-col gap-1'>
                                            <li className='text-xl'> <span className='font-bold mr-1'>ERA:</span> {calculateDiff(data[0].ERA)} </li>
                                            <li className='text-xl'> <span className='font-bold mr-1'>WHIP:</span> {calculateDiff(data[0].WHIP)} </li>
                                            <li className='text-xl'> <span className='font-bold mr-1'>k/9:</span> {calculateDiff(data[0]["K/9"])} </li>
                                        </ul>
                                    </div>
                                </div>
                            </>
            }
        </div>
    )
}

export default Pitchers