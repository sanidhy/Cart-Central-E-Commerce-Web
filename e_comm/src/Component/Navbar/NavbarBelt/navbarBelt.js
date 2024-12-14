import React from 'react'
import './navbarBelt.css'
import amazonLogo from '../../../../src/Assests/amazonLogo.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import india from '../../../Assests/india.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'

const NavbarBelt = () => {
  const cartItems=useSelector((state)=>state.cart.items);


  return (
    <div className='navbarBelt'>
        <div className='leftNavBelt'>
        <Link to={'/'}className='leftNavBeltLogo'>
        <img className='amazonLogoNavbar' src={amazonLogo} alt='amazonLogo' />
                    <span className='navbar_inLogo'>.in</span>
        </Link>
        <div className='navbarBeltLocation'>
            <div className='navbarbeltLocationImg'>
                <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' sx={{fontSize:"22px"}}></LocationOnOutlinedIcon>
            </div>

            <div className='navbarBeltLocationPlace'>
              <div className='navbarBeltLocationTop'>Delivering to Gururgram 201009</div>
              <div className='navbarBeltLocationBottom'>Update Location</div>
            </div>

        </div>
        </div>
        <div className="navbarBeltSearchBox">
                <div className="navbarBeltSearchDiv">
                    <div className="navbarBeltSearchBoxAll">
                        <div className="navbarBeltSearchBoxAllText">All</div>
                        <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'20px'}}></ArrowDropDownCircleOutlinedIcon>
                    </div>

                    <input type="text" className='navbarBeltInputSearchBox' placeholder='search Amazon.in'></input>


                      <div className='searchIconNavbarBelt'>
                        <SearchOutlinedIcon sx={{fontSize:"26px"}} className='seachIconNavbarBeltIcon'></SearchOutlinedIcon>

                      </div>
                </div>
            </div>
        
        <div className='rightSideNavbarBelt'>
          <div className='indianFlagCode'>
            <img src={india} className='indianFlag'></img>
            <div className='indianCodeNavbarbelt'>EN  &nbsp;
            <ArrowDropDownCircleOutlinedIcon sx={{fontSize:16,marginTop:1,marginLeft:-0.4}} className='indianCodeNavbarBeltDrp'></ArrowDropDownCircleOutlinedIcon></div>

          </div>

          <div>
          <div className='helloSignInNavbarBelt'>
            <div className='helloTopNavbarBelt' >Hello, User </div>
            <div className='indiaCodeNavbarBelt'>Accounts</div>
            </div>
            </div>
         

          <Link to={'/cart'} className='helloSignInNavbarBelt'>
            <span className='cartItemNumberNavbarBelt'>{cartItems.length}</span>
            <div className='helloTopNavbarBelt'><ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon><span className='cartTitle'>Cart</span></div>
          </Link>
        </div>
    </div>
  )
}

export default NavbarBelt
