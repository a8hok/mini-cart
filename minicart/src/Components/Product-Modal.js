import React from 'react';
import { connect } from 'react-redux'
import { ADD_CART } from '../Action/Action';

const mapStatetoProps = (state) => ({checkCart : state.cartInfo})
const mapDispatchtoProps = (dispatch) => ({addCart : (product) => dispatch(ADD_CART(product))})

function ProductModal({selectedProduct, closeModal, addCart, checkCart}) {

    const handleCart = () => {
        addCart(selectedProduct)
        closeModal()
    }

    const checkAddCartBtn = () => checkCart.filter(item => item.id === selectedProduct.id)

    return (
        <>
        <div className="modal-overlay"></div>
        <div className="product-modal">
            <div className="close-icon" onClick={() => closeModal()}>X</div>
            <div className="product-modal-container">
                <div className="product-modal-img">
                    <img src={selectedProduct.imageUrl} />
                </div>
                <div className="product-modal-details">
                    <h1 className="product-title">{selectedProduct.productName}</h1>
                    <h2>Ingredients</h2>
                    <div className="product-ingredients">{selectedProduct.ingredients}</div>
                    <h2>Description</h2>
                    <div className="product-description">{selectedProduct.description}</div>

                    <div className="product-price">Price: &#8377; {selectedProduct.price}</div>
                    {!checkAddCartBtn().length ? <button onClick={handleCart}>Add Cart</button> : <span>Added</span> }
                </div>
            </div>
        </div>
        </>
    )
}

export default connect( mapStatetoProps, mapDispatchtoProps)(ProductModal)
