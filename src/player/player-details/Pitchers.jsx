import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { LineWave } from 'react-loader-spinner'
import { pitchers } from '../../data/pitchers'
import DataContext from '../../context/counterContext'
import FixedCounter from '../../components/FixedCounter'

const Pitchers = () => {

    const userId = useParams()

    const navigate = useNavigate

    const {error, setError} = useContext(DataContext)

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 3000)

        if(error)
            navigate("/sorry")

        const pito = pitchers.filter(pitch => userId.name == pitch.Name)

        setData(pito[0])

    },[])

    const calculateDiff = (number) => {
        let percentage = parseFloat(number)
        percentage = (percentage * Math.floor(Math.random() * 8)) / 100
        
        let signe = Math.floor(Math.random() * 2) ? -1 : 1  
        let finalNumber = (percentage * signe) + parseFloat(number)
        
        return finalNumber.toFixed(2)
    }

    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center gap-4 relative">
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
                            <FixedCounter/>
                                <div className="player-head text-center">
                                    <h1 className='text-3xl font-bold'>{data.Name}</h1>
                                    <h3 className=' text-gray-400 text-xl'>{data.Team}</h3>
                                </div>
                                <div className="player-stats flex gap-5 justify-between w-[500px]">
                                    <div className="lift-stats">
                                        <ul className='flex flex-col gap-1'>
                                            <li className='text-xl'> <span className='font-bold mr-1'>ERA:</span> {calculateDiff(data.ERA)} </li>
                                            <li className='text-xl'> <span className='font-bold mr-1'>WHIP:</span> {calculateDiff(data.WHIP)} </li>
                                            <li className='text-xl'> <span className='font-bold mr-1'>k/9:</span> {calculateDiff(data["K/9"])} </li>
                                        </ul>
                                    </div>
                                </div>
                            </>
            }
        </div>
    )
}

export default Pitchers