import {  useState } from "react"
import {toast} from "react-hot-toast"
import { useAuthContext } from "../Context/AuthContext"

const useSignup = () => {
  const[loading,setLoading] = useState(false)
  const {setAuthUser} = useAuthContext()

  const signup = async ({fullname,username,password,confirmPassword,gender}) => {
    const success = handleInputError({fullname,username,password,confirmPassword,gender})
    if(!success) return;

    setLoading(true)
    try {
        const res = await fetch('/api/auth/signup',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({fullname,username,password,confirmPassword,gender})
        })

        const data = await res.json()
        if(data.error){
            throw new Error(data.error )
        }
        //save data to local storage
        localStorage.setItem("chat-app-user",JSON.stringify(data))

        //context
        setAuthUser(data)

    } catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(false)
    }
  }
  return {loading,signup}
}

export default useSignup


function handleInputError({fullname,username,password,confirmPassword,gender}){
    if(!fullname || !username || !password || !confirmPassword || !gender)  {
        toast.error("please fill all the fields")
        return false
    }

    if(password !== confirmPassword){
        toast.error("passwords don't match")
        return false
    } 

    if(password.length < 6){
        toast.error("password must be atleast 6 characters long")
        return false
    }
    return true
}
