import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Navbar from "./components/Navbar"
import ProfileCard from "./components/ProfileCard"

const App = () => {
  return (
    < >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/lp" element={<ProfileCard />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}
export default App