import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Landing_page/home/HomePage';
import '@fortawesome/fontawesome-free/css/all.min.css'
import PricingPage from './Landing_page/pricing/pricingPage';
import AboutPage from './Landing_page/About/AboutPage'
import SignUp from './Landing_page/signup/SignUp'
import SupportPage from './Landing_page/support/SupportPage'
import ProductPage from './Landing_page/product/productPage';

import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='products' element={<ProductPage/>}/>
<Route path='signUp' element={<SignUp/>}/>
<Route path='pricing' element={<PricingPage/>}/>
<Route path='support' element={<SupportPage/>}/>
<Route path='about' element={<AboutPage/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
);


// reportWebVitals();
