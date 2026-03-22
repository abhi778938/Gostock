import React from "react";

function Hero() {
  return (
    <div className="container text-center">
      <div className="row">
        <img
          src="/Media/image/homeHero.png"
          alt="Homepage"
          className="img-fluid p-3 mb-5"
        />
        <h1 className=" mt-5">Get Set Stock </h1>
        <p> This is bussiness and stock trading app please do any thing own risk.</p>
        <button  className=" mb-5 p-2 btn btn-primary btn-sm fs-5" style={{width:"25%",margin:"0% auto"}}>signUp</button>
      </div>
    </div>
  );
}

export default Hero;

