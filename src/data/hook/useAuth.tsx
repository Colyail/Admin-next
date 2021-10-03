import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => useContext(AuthContext)

// Hook that lets you access data from the AuthContext
export default useAuth