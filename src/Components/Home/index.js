import React from "react";
import "./style.css";
import '../../index.css';
import img_4 from  '../../img/4.jpg';
import img_3 from  '../../img/3.jpg';
import img_8 from  '../../img/8.jpg';

const Home = () => {
    return(

        <div>
            
 <div id="myCarousel" className="carousel slide" data-ride="carousel">
<ol className="carousel-indicators">
  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
  <li data-target="#myCarousel" data-slide-to="1"></li>
  <li data-target="#myCarousel" data-slide-to="2"></li>
</ol>
<div className="carousel-inner">
  <div className="carousel-item active">
    <div className="over"></div>
    <img className="first-slide" src={img_4} alt="First slide" />
    <div className="container">
      <div className="carousel-caption text-center">
        <h1 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2" data-wow-offset="200">GYM</h1>
        <h3 className="wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">IT’S <span>GYM</span> TIME.LET’S <span>GO</span> WE ARE READY TO <span>FIT</span> YOU </h3>
        <p className=" text-center wow fadeInUp" data-wow-duration=".5s" data-wow-delay="0.2s">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
         <button className="wow fadeInDown" data-wow-duration="0.5s" data-wow-delay="0.4s">read more</button>
        <button className="contact wow fadeInDown" data-wow-duration="0.5s" data-wow-delay="0.4s">contact</button>
      </div>
    </div>
  </div>
  <div className="carousel-item">
     <div className="over"></div>
    <img className="second-slide" src={img_3} alt="Second slide" />
    <div className="container">
      <div className="carousel-caption text-center">
        <h1>GYM</h1>
        <h3>IT’S <span>GYM</span> TIME.LET’S <span>GO</span> WE ARE READY TO <span>FIT</span> YOU </h3>
        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        <button>read more</button>
        <button className="contact">contact</button>
      </div>
    </div>
  </div>
  <div className="carousel-item">
     <div className="over"></div>
    <img className="third-slide" src={img_8} alt="Third slide" />
    <div className="container">
      <div className="carousel-caption text-center">
        <h1>GYM</h1>
         <h3>IT’S <span>GYM</span> TIME.LET’S <span>GO</span> WE ARE READY TO <span>FIT</span> YOU </h3>
        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        <button>read more</button>
        <button className="contact">contact</button>
      </div>
    </div>
  </div>
</div>
<a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="sr-only">Previous</span>
</a>
<a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="sr-only">Next</span>
</a>
</div>


        </div>
    )
}
export default Home