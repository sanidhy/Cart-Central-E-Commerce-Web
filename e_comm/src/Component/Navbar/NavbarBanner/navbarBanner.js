import React from 'react'
import './navbarBanner.css'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
const NavbarBanner = () => {
 const options = [
    // Array Of objects
    { "name": "Fresh" }, { "name": "Amazon MiniTv" }, { "name": "Sell" }, { "name": "Best Seller" }, { "name": "Today's Deal" }, { "name": "Mobile" }, { "name": "Electronics" }, { "name": "Home & Kitchen" }
  ]
  return (
    <div className='navbarBanner'>
      <div className='navbarBannerOptionsLeft'>
        <div className='optionsNavbarBanner'>
          <MenuIcon sx={{ fontSize: '24px' }}></MenuIcon>
          <div className='allOptionsNavbarBanner'>All</div>
        </div>

        {
          options.map((item, ind) => {
            return (
              <Link to={'/products'}className='optionsNavbarBanner' key={ind}>
                <div className='allOptionsNavbarBanner'>{item.name}</div>
              </Link>
            );
          })
        }
          

      </div>
      <div className='navbarBannerRightSide'>
        <img src="https://m.media-amazon.com/images/G/31/img19/SiddMiniTV/SWM_400x39_MX-1._CB541558057_.jpg" alt='amazonPrimeLogo'></img>
      </div>
    </div>
  )
}
export default NavbarBanner
