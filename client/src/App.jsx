import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

//import App.css
import './App.css';
const About_Page = lazy(() => import('./container/About_Page/About_Page'));
const Shop = lazy(() => import('./container/Shop/Shop'));
const Home = lazy(() => import('./container/Home/Home'));
const Contact = lazy(() => import('./container/Contact_Page/Contact_Page'));
const Search = lazy(() => import('./container/Search_Page/Search_Page'));
const Cart = lazy(() => import('./container/Cart_Page/Cart_Page'));
const Signup = lazy(() => import("./components/Signup"));
const Login = lazy(() => import("./components/Login"));

const App = () => {
  return (
      <Suspense fallback={<div>Loading............</div>}>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/about' element={<About_Page />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/search' element={<Search />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Suspense>
  )
}

export default App;