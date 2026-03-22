import React from 'react';
 function Award() {
    return ( <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
                <img src='Media\image\largestBroker.svg' alt='awards'/>
            </div>
            <div className='col-6 p-5'>
<h1> Largest Broker and Stocks </h1>
<p className='mb-5'>When a person buys a stock, they become a shareholder, which means they own a small part of that company.</p>
<div className='row'>
    <div className='col-6 '>
        <ul>
            <li>
                <p> Feature and Options</p>
            </li>
            <li>
                <p> community and derivatives </p>
            </li>
            <li>
                <p> community and currency</p>
            </li>
        </ul>
    </div>
    <div className='col-6 '>
        <ul>
            <li>
                <p> Stocks & IPos</p>
            </li>
            <li>
                <p> Direct mutual found</p>
            </li>
            <li>
                <p> Bonds and govt securites</p>
            </li>
        </ul>
    </div>
</div>
<img src='Media\image\pressLogos.png'alt='press logo'/>
            </div>

        </div>

    </div>);
 }
 
 export default Award;