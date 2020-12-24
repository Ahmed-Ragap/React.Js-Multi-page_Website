import React from 'react'
import './style.css'
const Contact = () => {
    return(
        <div>
<div className="contact footer">
  <div className="over"></div>
  <div className="container text-center">
    <h3 className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay="0" data-wow-offset="200">get in tauch me</h3>
    <div className="row">
      <div className="col-sm-6 col-md-4 col-lg-3">
        <button className="left-div wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="200"><i className="fa fa-envelope-o" aria-hidden="true"></i></button>
        <div className="main-contents wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2" data-wow-offset="200">
           <span>E mail</span>
        <span>ahmedapdo910@yahoo.com</span>
        </div>
         <button className="left-div wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="200"><i className="fa fa-phone" aria-hidden="true"></i></button>
        <div className="main-contents wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="200">
           <span>contact us</span>
        <span>+011-455-93-283</span>
        </div>
         <button className="left-div wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="100"><i className="fa fa-fax" aria-hidden="true"></i></button>
        <div className="main-contents wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="100">
           <span>fax</span>
        <span>+| 000 000 000 000</span>
        </div>
      </div>
      <div className="col-sm-6 col-md-8 col-lg-9">
       <div className="row">
         <div className= "col-sm-12 col-md-6">
            <input type="text" name="text" placeholder="Name" className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay="0" data-wow-offset="200" />  
         </div>
          <div className= "col-sm-12 col-md-6">
            <input type="text" name="text" placeholder="Email" className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="200" />  
         </div>
        <div className= "col-sm-12 col-md-6">
            <input type="text" name="text" placeholder="Country" className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset="200" />  
         </div>
           <div className= "col-sm-12 col-md-6">
            <input type="text" name="text" placeholder="Phone" className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s" data-wow-offset="200" />  
         </div>
          <div className= "col-sm-12">
            <textarea placeholder="write something" className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s" data-wow-offset="200"></textarea>
            <button className="send-button wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s" data-wow-offset="50">send</button>
         </div>
       </div>
      </div>
    </div>
  </div>
</div>
<div className="owner">
  <div className="container text-center">
    <div className="row">
      <div className="col-sm-6">
        <span>all &copy reserved to their owner <a href="https://www.facebook.com/ahmed.apdo.332" target="_blanck"> Ahmed Ragap</a></span>
      </div>
      <div className="col-sm-6">
        <span>2019_2020</span>
      </div>
    </div>
  </div>
</div>
     
        </div>
    )
}
export default Contact;