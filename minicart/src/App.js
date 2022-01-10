import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddProductComponent  from './Components/Add-product';
import ProductModal from './Components/Product-Modal'
import CartComponent from './Components/Cart-Modal'

const mapStatetoProps = (state) => ({ 
  productList: state.product,
  cartDetails: state.cartInfo
})

function App({productList, history, cartDetails}) {

  const [showAddProduct, setshowAddProduct] = useState(false);
  const [showProductList, setshowProductList] = useState(true);
  const [selectedProduct, setselectedProduct] = useState({});
  const [showModal, setshowModal] = useState(false);
  const [cartModal, setcartModal] = useState(false)

  const productModal = (product) => {
    setselectedProduct(product);
    setshowModal(true);
  }

  const closeModal = () => {
    setshowModal(false);
    setcartModal(false)
  }

  return (
    <>
      { showProductList && <div className="header">
         <button name="button" onClick={ () => {setshowAddProduct(true); setshowProductList(false)} } >Add Product</button> 
         <button name="button"  onClick={ () => {setcartModal(true)} }>Cart {cartDetails.length}</button> 
      </div>}
      
      { showAddProduct && <AddProductComponent triggerListProduct={() => {setshowAddProduct(false); setshowProductList(true)}}/>}

      { showProductList &&
        <div className="product-container">
        <div className="product-box-container">
          {productList.length && productList.map( (product, index) => 
            <div onClick={() => productModal(product)} className="product-box" key={index} >
              <div className="product-img"><img src={product.imageUrl} /></div>
              <div className="product-title">{product.productName}</div>
              <div className="product-title">&#8377; {product.price}</div>
              
              
            </div>
          )}
        </div>
      </div>
      }

      { showModal && <ProductModal selectedProduct={selectedProduct} closeModal={closeModal} />}

      { cartModal && <CartComponent closeModal={closeModal}/>}
    </>
  );
}

const appComponent = withRouter(App)

export default connect(mapStatetoProps)(appComponent);
