let id = 0;

export const ADD_PRODUCT  = (product) => ({
    type : 'ADD_PRODUCT',
    item: {id: ++id, ...product}
})

export const ADD_CART  = (product) => ({
    type : 'ADD_CART',
    item: product
})

export const REMOVE_CART_ITEM  = (item) => ({
    type : 'REMOVE_CART_ITEM',
    item : item
})
