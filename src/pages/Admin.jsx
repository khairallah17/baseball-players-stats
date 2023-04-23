import React from 'react'
import { useState, useEffect } from 'react'

const Admin = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {

        try {

            

        } catch(err) {
            console.log(err.message)
        }

    }

    return (
        <div className='flex w-screen h-screen items-center justify-center flex-col gap-5'>
            <h1 className="text-3xl">Login To Admin</h1>
            <input type="text" name="username" placeholder='username' className='p-3 border border-gray-300 rounded-lg outline-none' onChange={(e) => {setUsername(e.target.value)}} />
            <input type="password" name='password' placeholder='password'  className='p-3 border border-gray-300 rounded-lg outline-none' onChange={(e) => {setPassword(e.target.value)}} />
            <button type='button' className='p-2 px-6 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-500 duration-200 hover:text-white' onClick={handleLogin} >Login</button>
        </div>
    )
}

export default Admin