import './App.css'
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Navigate } from 'react-router';
import Success from './pages/Success';
import { useSelector } from "react-redux"

function App() {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        {/* after :(collan) comes parameter in this case :category is parameter */}
        <Route path="/products/:category" element={<ProductList />}> </Route>
        <Route path="/product/:id" element={<Product />}> </Route>
        <Route path="/cart" element={<Cart />}> </Route>
        <Route path="/success" element={<Success />}> </Route>
        {/* if user does exist navigate to / route else to login page */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route>
        <Route path="/register" element={user ? <Navigate to="/" />  : <Register />}> </Route>
      </Routes>
    </Router>
  )
}

export default App
