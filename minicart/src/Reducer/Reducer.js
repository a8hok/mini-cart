const getLocalStoreData = JSON.parse(localStorage.getItem('product')) || [];
const getCartInfo = JSON.parse(localStorage.getItem('cartInfo')) || [];
const initialState =  { product: getLocalStoreData, cartInfo: getCartInfo };

export const ProductReducer = ( state = initialState, action) => {
    const { item, type } = action;
    switch(type) {
        case 'ADD_PRODUCT':
            localStorage.setItem('product', JSON.stringify([...state.product, item]));
            return {
                ...state, 
                product: [
                    ...state.product,
                    item
                ]
            };
        
        case 'ADD_CART':
        localStorage.setItem('cartInfo', JSON.stringify([...state.cartInfo, item]));
            return {
                ...state, 
                cartInfo: [
                    ...state.cartInfo,
                    item
                ]
            };
        
        case 'REMOVE_CART_ITEM':
            localStorage.setItem('cartInfo', JSON.stringify(item));
            return {
                ...state,
                cartInfo: item
            };

        default:
            return state;
    }
}
