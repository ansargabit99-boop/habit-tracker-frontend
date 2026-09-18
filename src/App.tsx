import { useState } from "react"
import MyRoutes from "./routes"

function App() {
  const [logged,setLogged] = useState(false)
  return <MyRoutes logged={logged} setLogged={setLogged}/>
}

export default App
