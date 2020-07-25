

import React from 'react';
import ShippingTracking from './components/shipping/ShippingTracking'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
function App() {
 
return (
<Router>
   <div className='container '>
     
      <nav className="navbar top-menu navbar-expand-lg fixed-top " style={{backgroundColor:"white"}}>
         <Link className="navbar-brand" to="/" >
         <img  src="https://bosta.co/wp-content/uploads/2019/08/Component.svg" alt="logo"/></Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
         <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2  left_menu  "  id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
            <li className="nav-item">
               <Link className="nav-link text-dark font-weight-bold " to="#">
               الرئيسية<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link text-dark font-weight-bold " to="#">
               الأسعار</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link text-dark font-weight-bold  " to="#">
               كلم المبيعات</Link>
            </li>
         </ul>
         <ul className="navbar-nav mr-auto">
           
            <li className="nav-item dropdown " >
               <Link className="nav-link dropdown-toggle text-dark font-weight-bold  " to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               تتبع شحنتك
               </Link>
               <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div  style={{ display: "block",fontWeight: "bolder", fontSize: "24px" }} className="track_popup">
                  <div className="inner_pop">
                     <h2 className="head_pop">تتبع شحنتك</h2>
                     <p className="lable_pop" style={{ fontWeight: "400px", fontSize: "16px" }}>ادخل رقم الشحنة و تابع شحنتك أول بأول</p>
                     <form className="track_form d-flex justify-content-around" action="/tracking-shipment/">
                        <input type="hidden" name="lang" value="ar" />
                        <input type="text" className="pop_text" placeholder=" رقم الشحنة" id="track_num" name="track_num" />
                        <button type="submit" className="buttonsearch rounded-circle"><i className="fa fa-search" ></i></button>
                     </form>
                  </div>
               </div>
   </div>
   
   </li>
   <div className="divider-vertical"></div>
   <li className="nav-item">
   <Link className="nav-link text-dark font-weight-bold " to="#"> تسجيل الدخول</Link>
   </li>
   <li className="nav-item">
   <Link className="nav-link  font-weight-bold " to="#" style={{color:"red"}}>ENG</Link>
   </li>
   </ul>
   </div>
   </nav>
   <div className="body">
      <Route path="/tracking-shipment/" component={ShippingTracking}  />
   </div >
   </div>
</Router>
);
}
export default App;

