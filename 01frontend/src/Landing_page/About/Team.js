import React from 'react';

function Team() {
    return ( <div className='container'>
            <div className='row p-5 mt-5 border-top'>
                <h1 className='fs-4 text-center mb-5'>
                   People
                </h1>
            </div>
           < div className='row p-5 '>
            <div className='col-6 p-5 text-center text-muted'>
               <img src='Media\image\nithinKamath.jpg'alt='Ceo' style={{width:"70%",borderRadius:"100%"}}/>
                <h4 className='text- fs-6'>
                    Nitin kamath
                </h4>
                <h4 className='fs-6 '>
                    Founder CEO
                </h4>
            </div>
            <div style={{textDecoration:"none"}} className='col-6 p-5  '>
                <p>
                    GoStock is more than just a trading app — it is your complete stock market companion. By combining technology, data, and simplicity, GoStock helps you take control of your financial future and invest with confidence.
                </p>
                <p>
                    GoStock is designed for speed and ease of use. Whether you are checking prices, analyzing stocks, or placing trades, everything is just a few taps away. The smooth experience ensures you stay focused on growing your investments.
                </p>
                <p>
                    The app uses advanced encryption and secure authentication to protect user data and financial information. Every transaction and activity is handled with the highest level of safety, giving users complete peace of mind.
                </p>
                <p> Contect On <a href=''>homePage</a>/ <a href=''>TredingQ&A</a>/ <a href=''>Twitter</a></p>
            </div>
            </div>
        </div>
    )
}

export default Team;