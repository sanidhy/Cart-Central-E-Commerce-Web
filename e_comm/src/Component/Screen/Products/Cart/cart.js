
import React, { useState, useEffect } from 'react'
import './cart.css'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart,clear_cart } from "../../../../redux/action/actions";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Cart = () => {
    const [cartItem, setCartItem] = useState([]);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    let a=0;
    let cost=cartItems.map((item)=>{return a=a+item.price})

    useEffect(() => {
        setCartItem(cartItems);
    }, [cartItems])


    const handle_on_clear=()=>{
        toast.info("Sucessfully Clear Cart",{
            position:'bottom-right',
            theme:'dark'
        })
        dispatch(clear_cart())
    }

    const handleRemoveFromCart=(id)=>{
        toast.error("Item Removed From Cart",{
            position:'bottom-right',
            theme:'dark'
        })
            dispatch(removeFromCart(id));
    }

    return (
        <div className='cart'>

            <div className='topLeftCart'>
                <div className='topLeftCartTitle'>Shopping Cart</div>
                <div className='desellectAllCart'onClick={()=>{handle_on_clear()}}>Deselect all items</div>
                <div className='cartPriceTextDivider'>Price</div>


                <div className='cartItemsDiv'>
                    {
                        cartItems.map((item, ind) => {
                            return (
                                <div className='cartItemBlock'>
                                    <div className='cartItemLeftBlock'>
                                        <div className='cartItemLeftBlockImage'>
                                            <img className='cartItemLeftBlockImg' src={item.imageUrl}></img>
                                        </div>
                                        <div className='cartItemLeftBlockDetails'>
                                            <div className='cartItemProductName'>{item.name} </div>
                                            <div className='inStockCart'>In stock</div>
                                            <div className='elgFreeshp'>Eligible for FREE Shipping </div>
                                            <div className='amazonFullFilledImage'><img className='fullfillimg' src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"></img></div>
                                            <div className='removeFromCart' onClick={()=>{handleRemoveFromCart(item.id)}}>Remove From Basket</div>
                                        </div>
                                    </div>
                                    <div className='cartItemRightBlock'>
                                        ₹{item.price}
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>


            </div>

            <div className='topRightCart'>
                <div className='subTotalTitle'>Subtotal ({cartItem.length}items) : <span className='subTotalTitleSpan'>₹ {a}</span></div>
                <div className='giftAddto'>
                    <input type="checkbox"></input>
                    <div>This Order Contains a gift</div>
                </div>
                <div className='proceedToBuy'>Proceed To Buy</div>
            </div>


            <ToastContainer></ToastContainer>
        </div>
    )
}