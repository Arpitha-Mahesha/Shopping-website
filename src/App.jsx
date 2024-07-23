import 'bootstrap/dist/css/bootstrap.min.css'
import Navigationbar from './components/Navigationbar'
import Products from './Pages/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart'

function App() {
  return (
   <>
   <BrowserRouter>
   <Navigationbar />
   <Routes>
    <Route path='/' element={<Products></Products>}></Route>
    <Route path='/cart' element={<Cart></Cart>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
