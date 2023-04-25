import { Outlet, Navigate } from "react-router-dom"
import DataContext from "../context/counterContext"
import { useContext } from "react"

const PrivateRoute = () => {

    const {error} = useContext(DataContext)

    console.log(error)

  return (
    error ? <Navigate to="/sorry"/> : <Outlet/>
  )
}

export default PrivateRoute