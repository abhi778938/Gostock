import React from "react";

function Hero() {
  return (
    <div className="conatainer">
      <div className="row mt-5 p-5 ">
        <h1>Charges explained</h1>
        <div className="col-6 mt-3">
          <h3 className="text-muted fs-5 mb-3">Securities/Commodities transaction tax</h3>
          <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
          <p>
            When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
          </p>
          <h3 className="text-muted fs-5 mb-3">
            Transaction/Turnover Charges
          </h3>
          <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
          <p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
          <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
          <p>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
          <p>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
          <h3 className="text-muted fs-5 mb-">Call & trade</h3>
          <p>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
          <h3 className="text-muted fs-5 mb-3">Stamp charges</h3>
          <p>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
        </div>
        <div className="col-6 ">
            <h3 className="text-muted fs-5 mb-3">GST</h3>
          <p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
         
          <h3 className="text-muted fs-5 mb-3">
            SEBI Charges
          </h3>
          <p>CharCharged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
          <h3 className="text-muted fs-5 mb-3">DP (Depository participant) charges</h3>
          <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
          <p>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
          <p>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
          <h3 className="text-muted fs-5 mb-">Call & trade</h3>
          <p>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
          <h3 className="text-muted fs-5 mb-3">Stamp charges</h3>
          <p>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
