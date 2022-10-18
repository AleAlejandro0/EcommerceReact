import { Route, Routes } from 'react-router-dom'
import Home from './components/Routes/Home'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import ProductDetail from './components/Routes/ProductDetail'
import Header from './components/shared/Header'
import ProtectedRoutes from './components/Routes/ProtectedRoutes'
import Cart from './components/shared/Cart'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProducts } from './store/slices/products.slice'
import Footer from './components/shared/Footer'
 
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  
  return (
  <div className='App'>
   <Header/>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/product/:id' element={<ProductDetail/>}/>
      
     <Route element={<ProtectedRoutes/>}>
       <Route path='/purchases' element={<Purchases/>}/>
       <Route path='/cart' element={<Cart/>}/>
     </Route>
   </Routes>
   <Footer/>
  </div>
  )
}

export default App