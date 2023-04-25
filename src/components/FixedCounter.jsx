import React, { useContext } from 'react'
import DataContext from '../context/counterContext'

const FixedCounter = () => {

    const {counter} = useContext(DataContext)

  return (
    <div className='absolute bottom-7'>
        <h1 className='font-bold text-4xl'>you have {counter}/3 requests left</h1>
    </div>
  )
}

export default FixedCounter