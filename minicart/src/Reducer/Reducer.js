let productInfo = [
    {
        "id": "123442",
        "title": "Product 1",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "image": "/product1.jpeg",
        "price": "39",
        "currency": "$"
    },
    {
        "id": "123443",
        "title": "Product 2",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "image": "/product2.jpeg",
        "price": "39",
        "currency": "$"
    }
];
const getLocalStoreData = JSON.parse(localStorage.getItem('product')) || productInfo;
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
