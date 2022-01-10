import React, { useState } from 'react'
import { withRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { ADD_PRODUCT} from '../Action/Action'

function mapDispatchtoProps(dispatch) {
    return {
        addProduct : (product) => dispatch(ADD_PRODUCT(product))
    }
}

function AddProduct(props) {
    
    const [productInfo, setproductInfo] = useState({
        productName       : '',
        ingredients      : '',
        description      : '',
        imageUrl         : '',
        price            :0
    })
    
    // const [userList, setuserList ] = useState([])
    
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
        //props.history.push('/');
    }

    return (
        <div className="add-product-container">
            <form onSubmit={handleAddProduct}>
                <div className="form-row">
                    <label>Recipe Name</label>
                    <input  type="text" name="recipeName" onChange ={formOnChange} required/>
                </div>
                <div className="form-row">
                    <label>Ingredients</label>
                    <textarea maxLength="140" rows="5" name="ingredients" onChange ={formOnChange} required/>
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
                <button>Add New Recipe</button>
            </form>
        </div>
    )
}

const AddProductComponent = withRouter(AddProduct)
export default connect(null, mapDispatchtoProps)(AddProductComponent)


