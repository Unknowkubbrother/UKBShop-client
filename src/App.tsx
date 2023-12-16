// @!import
import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";
import './index.css'

function App() {

  return (
    <>
    <Navbar/>
    <Outlet />
    </>
  )
}

export default App
