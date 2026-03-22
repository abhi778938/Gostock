import React from 'react';
import { Link } from 'react-router-dom';
function Pricing() {
    return (<div className='container'>
<div className='row'>
    <div className='col-6'>
        <h1>
            Unbeatable Pricing
        </h1>
        <p>
            Companies sell stocks to raise money for expanding their business, developing new products, or paying debts
        </p>
         <Link to=""  style={{textDecoration:"none"}}>Pricing <i class="fa-solid fa-arrow-right"></i></Link>
    </div>
    <div className='col-2'></div>
    <div className='col-4 mb-5'>
        <div className='row text-center'>
            <div className='col border p-3'>
                <h1> <i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                <p>  Free Equity delivery and fast  <br/> mutual fumds </p>
            </div>
            <div className='col border p-3'>
                <h1> <i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                <p>  Interday abd F&O</p>
            </div>
        </div>
    </div>
</div>
    </div> );
}

export default Pricing;