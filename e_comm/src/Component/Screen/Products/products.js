import React from 'react'
import './products.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import Star from '@mui/icons-material/Star';
import productDetails from './product.json'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../redux/action/actions";


const Products = () => {



    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleAddToCart=async(item)=>{
        toast.success("Sucessfully Added in cart", {
            position: "bottom-right",
            theme: "dark",
          });
      
          dispatch(addToCart(item));

    };

    

  return (
    <div className='productPage'>
    <div className='productTopBanner'>
        <div className='productTopBannerItems'>
        Electronics
        </div>
        <div className='productTopBanneritemSubMenu'>Mobiles & Accessories</div>
        <div className='productTopBanneritemSubMenu'>Laptops & Accessories</div>
        <div className='productTopBanneritemSubMenu'>TV & HomeEnterainment</div>
        <div className='productTopBanneritemSubMenu'>Audio</div>
        <div className='productTopBanneritemSubMenu'>Cameras</div>
        <div className='productTopBanneritemSubMenu'>Computer Peripherials</div>
        <div className='productTopBanneritemSubMenu'>Smart Technology</div>
        <div className='productTopBanneritemSubMenu'>Musical Instruments</div>
        <div className='productTopBanneritemSubMenu'>Office & stationary</div>
    </div>

    <div className='productPageMain'>
        <div className='productPageMainLeftCategory'>
            <div className='productsPageMainLeftCategoryTitle'>Category</div>
            <div className='productsPageMainLeftCategoryContent'>
                <div className='productsPageMainLeftCategoryTitleContent'>Computers & Accessories</div>
                <div className='productsPageMainLeftCategoryContentSub'>Macbooks</div>
                <div className='productsPageMainLeftCategoryContentSub'>Amazon Prime</div>
                <div className='productsPageMainLeftCategoryContentSub'>Average Customer Review</div>

                    <div className='ratingLeftBox'>
                        <Star  sx={{fontSize:"20px",color:'#febd69'}} ></Star>
                        <Star  sx={{fontSize:"20px",color:'#febd69'}} ></Star>
                        <Star  sx={{fontSize:"20px",color:'#febd69'}} ></Star>
                        <Star  sx={{fontSize:"20px",color:'#febd69'}} ></Star>
                        <StarOutlineIcon sx={{fontSize:"20px",color:'#febd69'}}/>
                        <div className='andUp'>&UP</div>

                    </div>

                    <div className='ratingLeftBox'>
                        <Star  sx={{fontSize:"20px",color:'#febd69'}} ></Star>
                        <Star  sx={{fontSize:"20px",color:'#febd69'}} ></Star>
                        <Star  sx={{fontSize:"20px",color:'#febd69'}} ></Star>
                        <StarOutlineIcon sx={{fontSize:"20px",color:'#febd69'}}/>
                        <StarOutlineIcon sx={{fontSize:"20px",color:'#febd69'}}/>
                        <div className='andUp'>&UP</div>

                    </div>

                    <div className='ratingLeftBox'>
                        <Star  sx={{fontSize:"20px",color:'#febd69'}} ></Star>
                        <Star  sx={{fontSize:"20px",color:'#febd69'}} ></Star>
                        <StarOutlineIcon sx={{fontSize:"20px",color:'#febd69'}}/>
                        <StarOutlineIcon sx={{fontSize:"20px",color:'#febd69'}}/>
                        <StarOutlineIcon sx={{fontSize:"20px",color:'#febd69'}}/>
                        <div className='andUp'>&UP</div>

                    </div>

                    <div className='ratingLeftBox'>
                        <Star  sx={{fontSize:"20px",color:'#febd69'}} ></Star>
                        <StarOutlineIcon sx={{fontSize:"20px",color:'#febd69'}}/>
                        <StarOutlineIcon sx={{fontSize:"20px",color:'#febd69'}}/>
                        <StarOutlineIcon sx={{fontSize:"20px",color:'#febd69'}}/>
                        <StarOutlineIcon sx={{fontSize:"20px",color:'#febd69'}}/>
                        <div className='andUp'>&UP</div>

                    </div>

                    <div className='productPageMainLeftCategoryContentSub'>Amazon Prime</div>
                    <div className='productPageMainLeftCategoryContentSub'>Average Customer Review</div>
            </div>

        </div>

        <div className='productPageMainRight'>
        <div className="productsPageMainRightTopBanner">
                    1-5 of 5 results for <span className='productsPageMainRightTopBannerSpan'>Macbooks</span>
        </div>
        <div className='itemsImageProductPage'>



            {
                productDetails.product.map((item,index)=>{
                    return(
                        <div className='itemsImageProductPageOne' key={item.id}>
                        <div className='imgBlockitemsImageProductPageOne'>
                            <img src={item.imageUrl} className='productImageProduct'></img>
                        </div>
                        <div className='productNameProduct'>
                            <div>{item.name}</div>
                            <div className='productNameProductRating'>
                                <StarIcon sx={{fontSize:'16px',color:'#febd69'}}></StarIcon>
                                <StarIcon sx={{fontSize:'16px',color:'#febd69'}}></StarIcon>
                                <StarIcon sx={{fontSize:'16px',color:'#febd69'}}></StarIcon>
                                <StarOutlineIcon sx={{fontSize:'16px',color:'#febd69'}}></StarOutlineIcon>
                            </div>
                            <div className='priceProductDetailPage'>
                                <div className='currencyText'>₹</div>
                                <div className='rateHomeDetail'>
                                    <div className='rateHomeDetailsPrice'>{item.price}</div>
                                    <div className='addtobasketBtn' onClick={()=>{handleAddToCart(item)}}>Add to Cart</div>
                                </div>
                               
                            </div>
                            <div className='offProductPage'>Upto 10% off on select cards</div>
                            <div className='freeDeliveryHomepage'>Free Delivery By Amazon</div>
                        </div>
        
                    </div>
                    );

                })
            }
        </div>
    </div>
    </div>


    <ToastContainer></ToastContainer>
    
</div>
  )
}

export default Products
