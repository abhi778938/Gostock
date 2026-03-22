import React from 'react';

function RightImage({RightproductName,RightProductDiscription,RightLearnMore,RightImgurl}) {
    return ( 
        <div className='conatiner'>
            <div className='row'>
                <div className='col-6'>
                <h1>{RightproductName}</h1>
                    <p>{RightProductDiscription}</p>
                    <div>
                        <a href={RightLearnMore}>
                            Learn More
                        </a>
                    </div>
                </div>
                <div className='col-6'>
                    <img src={RightImgurl}/>
                </div>
                    </div>
                    
        </div>
    );
}

export default RightImage;