import React from 'react';
 function Broker() {
    return ( 
        <div className='conatiner mt-5'>
            <div className='row'>
                <div className='col text-center'>
                    <h1>
                        Charges
                    </h1>
                     <p className='fs-4 p-3 mt-2'> List of all charges and taxes</p>
                </div>
            </div>

            <div className='row mt-5 p-4'>
                <div className='col-4'>
                    <img   style ={{width:"70%"}}  src='Media/image/pricingEquity.svg'/>
                    <h1 className='fs-4'>
                        Free equity delivery
                    </h1>
                    <p className='mt-3'>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className='col-4'>
                    <img  style ={{width:"70%"}} src='Media/image/intradayTrades.svg'></img>
                    <h1 className='fs-4'>
                        Intraday and F&O trades
                    </h1 >
                    <p className='mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.

                    </p>
                </div>
                <div className='col-4'>
                    <img style ={{width:"70%"}}  src='Media/image/pricingEquity.svg'/>
                    <h1 className='fs-4'>
                   Free direct MF
                    </h1>
                   <p className='mt-3'>
                    All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                   </p>
                </div>
            </div>
        </div>
     );
 }
 
 export default Broker;