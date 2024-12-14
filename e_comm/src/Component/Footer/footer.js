import React from 'react'
import './footer.css'
import amazonLogo from './../../Assests/amazonLogo.png'


const Footer = () => {
  return (
    <div className='footer'>
    <div className='footerContent'>
        <div className='footerCont1'>
            <div className='contentFooterTitle'>Get to Know Us</div>
            <div className='contentFooterSubTitlediv'>
            <div className='contentFooterSubTitleCont'>About US</div>
            <div className='contentFooterSubTitleCont'>Carrers</div>
            <div className='contentFooterSubTitleCont'>Press Release</div>
            <div className='contentFooterSubTitleCont'>Amazon Science</div>
            </div>
        </div>

        <div className='footerCont1'>
            <div className='contentFooterTitle'>Connent with US</div>
            <div className='contentFooterSubTitlediv'>
            <div className='contentFooterSubTitleCont'>Instagram</div>
            <div className='contentFooterSubTitleCont'>Twitter</div>
            <div className='contentFooterSubTitleCont'>Facebook</div>
            </div>
        </div>

        <div className='footerCont1'>
            <div className='contentFooterTitle'>Make Money With US</div>
            <div className='contentFooterSubTitlediv'>
            <div className='contentFooterSubTitleCont'>Sell on Amazon</div>
            <div className='contentFooterSubTitleCont'>Sell Under Amazon Acceleration</div>
            <div className='contentFooterSubTitleCont'>Protect and Builut Your Brand</div>
            <div className='contentFooterSubTitleCont'>Amazon Global Selling</div>
            <div className='contentFooterSubTitleCont'>Become an Affiliate</div>
            <div className='contentFooterSubTitleCont'>Fulfilment by Amazon</div>
        </div>
        
    </div>

    </div>
    <div className='amazonImg'>
    <img className='amazonImgLogo' src={amazonLogo}></img>
    </div>
    </div>
  )
}

export default Footer
