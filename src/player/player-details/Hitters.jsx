import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { LineWave } from 'react-loader-spinner'
import { hitters } from "../../data/hitters"

const Hitters = () => {

    const userId = useParams()

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 3000)

        const hito = hitters.filter(hit => hit.Name == userId.name)

        setData(hito[0])

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
                                    <h1 className='text-3xl font-bold'>{data.Name}</h1>
                                    <h3 className=' text-gray-400 text-xl'>{data.Team}</h3>
                                </div>
                                <div className="player-stats flex gap-5 justify-between w-[500px]">
                                    <div className="lift-stats">
                                        <ul className='flex flex-col gap-1'>
                                            <li className='text-xl'> <span className='font-bold mr-1'>AVG:</span> {calculateDiff(data.AVG)} </li>
                                            <li className='text-xl'> <span className='font-bold mr-1'>OBP:</span> {calculateDiff(data.OBP)} </li>
                                            <li className='text-xl'> <span className='font-bold mr-1'>SLG:</span> {calculateDiff(data.SLG)} </li>
                                        </ul>
                                    </div>
                                    <div className="right-stats">
                                    <ul className='flex flex-col gap-1'>
                                            <li className='text-xl'> <span className='font-bold mr-1'>BB%:</span> {calculateDiff(data["BB%"])} </li>
                                            <li className='text-xl'> <span className='font-bold mr-1'>K%:</span> {calculateDiff(data["K%"])} </li>
                                        </ul>
                                    </div>
                                </div>
                            </>
            }
        </div>
    )
}

export default Hitters