import React from "react";

function LeftImage({
  Imgurl,
  productName,
  ProductDescription,
  tryDemo,
  LearnMore,
  Google,
  AplleStore,
}) {
  return (
    <div class="container mt-5">
      <div className="row">
        <div className="col-6 ">
          <img src={Imgurl} />
        </div>
        <div  className="col-6 mt-3 ">
          <h1 className="mt-3">{productName}</h1>
          <p className="fs-4">{ProductDescription}</p>
          <div className="mt-5">
            
            <a href={tryDemo}>TryDemo</a>
            <a style={{marginLeft:"20px"}} href={LearnMore}>LearnMore</a>
          </div>
          <div className="p-3 mt-3">
            <img src={Google}/>
            <img src={AplleStore}/>
          </div>
          {/* /* <h2>Want to know more about our technology stack? Check out the <a href="">Zerodha.tech</a> blog.</h2> */ }
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
