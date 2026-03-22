import React from 'react';
import Hero from './Hero';
import LeftImage from './LeftImage';
import RightImage from './RightImage';
import Universe from './Universe';

function productPage() {
    return ( 
        <>
        <Hero/>
        <LeftImage
        Imgurl="Media/image/kite.png"
        productName="Kite"
        ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo"
        LearnMore="learn more"
        Google="Media/image/googlePlaybadge.svg"
        AplleStore="Media/image/appstoreBadge.svg"
        />
        <RightImage
        RightproductName="Console"
        RightProductDiscription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        RightLearnMore=""
        RightImgurl="Media/image/console.png"
        />
        <LeftImage
        Imgurl="Media/image/coin.png"
        productName="coin"
        ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin "

        Google="Media/image/googlePlaybadge.svg"
        AplleStore="Media/image/appstoreBadge.svg"
        />
         <RightImage/>
        <LeftImage
        Imgurl="Media/image/varsity.png"
        productName="Varsity mobile"
        ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="Try demo"
        LearnMore="learn more"
        Google="Media/image/googlePlaybadge.svg"
        AplleStore="Media/image/appstoreBadge.svg"
        />
         <p className='text-center fs-4 text-decoration-none '>
            Want to know more about our technology stack? Check out the <a href=''>Zerodha.tech</a> blog.
         </p>
         <Universe/>
        </>
     );
}

export default productPage;