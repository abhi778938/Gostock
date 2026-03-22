import React from "react";

function Universe() {
  return (
    <div className="conatiner mt-5 m-5">
      <div className="row">
        <div className="text-center mt-5">
             <h1 >The Zerodha Universe</h1>
        <p className="mt-3 ">Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className="col-4 p-3  mt-5">
            <div>
                   <img src="Media\image\zerodhaFundhouse.png"/>
                   <p className="text-center">helllo user</p>
            </div>
           <div className="mt-5 p-3"style={{width:"80%"}}>
             <img src="Media\image\streakLogo.png" style={{width:"80%"}} />
           </div>
        </div>
        <div className="col-4 p-3 mt-5">
            <div>
                   <img src="Media\image\sensibullLogo.svg" style={{width:"70%"}}/>
                   <p className="text-center mt-3">helllo user</p>
            </div>
           <div className="mt-5 p-3"style={{width:"80%"}}>
             <img src="Media\image\streakLogo.png" style={{width:"80%"}} />
           </div>
        </div>
        <div className="col-4 p-3 mt-5">
            <div>
                   <img src="Media\image\goldenpiLogo.png" style={{width:"70%"}}/>
                   <p className="text-center">helllo user</p>
            </div>
           <div className="mt-5 p-3"style={{width:"80%"}}>
             <img src="Media\image\dittoLogo.png" style={{width:"80%"}} />
           </div>
        </div>
        <button className="p-2 mt-5 btn-primary fs-5 " style={{width:"20%" ,margin:"auto",borderRadius:"20px", backgroundColor:"blue",color:'white'}}>Sign Up For Fre</button>
      </div>
    </div>
  );
}

export default Universe;
