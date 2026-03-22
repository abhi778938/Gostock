import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom mb-5'>
            <dic className='row text-center'>
                <h1 className='mt-3 '>Technology</h1>
                <h3 className='text-miuted fs-5 mt-3'> sleek & modern trading app is GoStock</h3>
                <p  className='mt-3 fs-6'>Check out our    <a href=""  style={{textDecoration:"none"}}>connection <i class="fa-solid fa-arrow-right"></i></a></p>
            </dic>
        </div>
    );
}

export default Hero;