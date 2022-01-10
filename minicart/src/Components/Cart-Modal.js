import React, {useState} from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { REMOVE_CART_ITEM } from '../Action/Action'

 const mapStatetoProps = (state) => ({cartDetails: state.cartInfo})

const mapDispatchtoProps = (dispatch) => ({removeCartDetails: (item) => dispatch(REMOVE_CART_ITEM(item))})

function CartModal({cartDetails, closeModal, removeCartDetails} ) {

    const [itemPrice, setitemPrice] = useState(0)

    const formOnChange = (e, price) => {
        const getQuantity = cartDetails.forEach(item => item.quantity = e.target.value);
        console.log(getQuantity, 'getQaun')

        setitemPrice(e.target.value * price)
    }

    const removeCartItem = (id) => { 
        const item = cartDetails.filter( item => item.id !== id)
        removeCartDetails(item)
    }
    const handleCheckout = () => {
        closeModal()
    }

    return (
        <>
        <div className="modal-overlay"></div>
        <div className="product-modal">
            <div className="close-icon" onClick={() => closeModal()}>X</div>
            <div className="modal-container">
                <h1>Your Cart Items</h1>
                <form onSubmit={handleCheckout}>
                    {
                        cartDetails.map( (item, index) =>

                        <div className="cart-row" key={index}>
                                <div className="cart-row-right">
                                    <input type="checkbox" name={item.title} checked />
                                    <img src={item.image} />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div>{item.title}</div>&nbsp;&nbsp;&nbsp;
                                    <div className="cart-price"> &#8377; {item.price}</div> &nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className="cart-item-remove" onClick={(e) => removeCartItem(item.id)}>Remove</div>
                                </div>
                        </div>
                        ) 
                    }
                    <button className="checkout-btn"> Checkout </button>
                </form>
                
            </div>
        </div>
        </>
    )
}

const CartComponent = withRouter(CartModal)
export default connect(mapStatetoProps, mapDispatchtoProps)(CartComponent)
