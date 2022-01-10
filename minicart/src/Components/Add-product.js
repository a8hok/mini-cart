import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ADD_PRODUCT } from '../Action/Action';

function mapDispatchtoProps(dispatch) {
    return {
        addProduct : (product) => dispatch(ADD_PRODUCT(product))
    }
}

function AddProduct(props) {
    
    const [productInfo, setproductInfo] = useState({
        title            : '',
        description      : '',
        imageUrl         : '',
        price            : 0
    })
    
    
    function formOnChange(e) {
        const {
            name,
            value
        } = e.target

        setproductInfo({ ...productInfo, [name] : value})
    }

    function handleAddProduct(e) {
        e.preventDefault()
        props.addProduct(productInfo);
        props.triggerListProduct();
    }

    return (
        <div className="add-product-container">
            <form onSubmit={handleAddProduct}>
                <div className="form-row">
                    <label>Title</label>
                    <input  type="text" name="title" onChange ={formOnChange} required/>
                </div>
                <div className="form-row">
                    <label>Description</label>
                    <textarea maxLength="140" rows="5" name="description" onChange ={formOnChange} required/>
                </div>
                <div className="form-row">
                    <label>Image Url</label>
                    <input  type="text" name="imageUrl" onChange ={formOnChange} />
                </div>
                <div className="form-row">
                    <label>Price</label>
                    <input  type="number" name="price" onChange ={formOnChange} />
                </div>
                <button>Add New Product</button>
            </form>
        </div>
    )
}

const AddProductComponent = withRouter(AddProduct)
export default connect(null, mapDispatchtoProps)(AddProductComponent)


