import {Routes, Route, Link} from "react-router-dom"
import Red from "./components/Red"
import Blue from "./components/Blue"
import './index.css'

function App() {

  return (
    <div>
      <div className = "nav">
        <Link to= "/">Home</Link>
        <Link to= "/red">Red</Link>
        <Link to= "/blue">Blue</Link>
      </div>
      <Routes>
        <Route path = "/" element = {<h1 className="welcome">Welcome HOME!</h1>}/>
        <Route path = "/red" element = {<Red/>}/>
        <Route path = "/blue" element = {<Blue/>}/>
      </Routes>
    </div>
  )
}

export default App
