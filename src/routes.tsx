import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/Register'
interface log {
    logged:boolean,
    setLogged:React.Dispatch<React.SetStateAction<boolean>>
}
const MyRoutes = ({logged,setLogged} : log)=>{
    return <Routes>
        <Route path='/' element={logged ? <Home setLogged={setLogged}/> : <Login setLogged={setLogged}/>}/>
        <Route path='/register' element={<Register setLogged={setLogged}/>}/>
    </Routes>
}

export default MyRoutes