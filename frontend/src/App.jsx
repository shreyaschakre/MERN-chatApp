import './App.css'
import {Navigate, Route, Routes} from 'react-router-dom'
import Login from './pages/Login/login'
import SignUp from './pages/Signup/SignUp'
import Home from './pages/home/Home'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './Context/AuthContext'

function App() {
  const {authUser} = useAuthContext()
  return (
    <div className='p-4 h-screen flex items-center justify-center' >
      <Routes>
        <Route path='/' element={ authUser ? <Home /> : <Navigate to={"/login"} /> }/>
        <Route path='/login' element={authUser ? <Navigate to='/'/> : <Login /> }/>
        <Route path='/Signup' element={ authUser ? <Navigate to='/'/> : <SignUp /> }/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
