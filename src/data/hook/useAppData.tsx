import { useContext } from "react"
import AppContext from "../context/AppContext"

const useAppData = () => useContext(AppContext)

// Hook that lets you access data from the AppContext
export default useAppData