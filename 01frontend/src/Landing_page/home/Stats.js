import React from "react";

function Stats() {
  return (
    <div className="conatiner  p-5">
      <div className="row p-5">
        <div className="col-6 p-5 ">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4"> Customer first always</h2>
          <p className="fs-5 text-muted"> 
            Companies sell stocks to raise money for expanding their business,
            developing new products, or paying debts
          </p>
          <h2 className="fs-4"> No spam AnyThing</h2>
          <p className="fs-5 text-muted">
            Companies sell stocks to raise money for expanding their business,
            developing new products, or paying debts
          </p >
          <h2 className="fs-4"> Gostock Universe</h2>
          <p className="fs-5 text-muted">
            Companies sell stocks to raise money for expanding their business,
            developing new products, or paying debts
          </p>
          <h2 className="fs-4"> Do better with money</h2>
          <p className="fs-5 text-muted">
            Companies sell stocks to raise money for expanding their business,
            developing new products, or paying debts
          </p>
        </div>
        <div className="col-6 p-5 ">
          <img
            src="Media/image/ecosystem.png"
            alt="ecoSystem"
            style={{ width: "90%" }}
          />
          <div className="text-center">
            <a href="" className="mx-5" style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
            <a href=""  style={{textDecoration:"none"}}>Try just Demo <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
