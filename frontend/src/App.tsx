import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Listing from "./rotas/Listing"
import Form from "./rotas/Form"

function App() {
  
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/form">
            <Route path=":movieId" element={<Form />} />
          </Route>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
