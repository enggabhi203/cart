export const ADD_ITEM = 'ADD_ITEM'
export const EMPTY_CART = 'EMPTY_CART'
export const APPLY_COUPAN = 'APPLY_COUPAN'
export const ADDTO_CART = 'ADDTO_CART'
export const SHOW_HODE_CART = 'SHOW_HODE_CART'
export const CROSS_POPUP = 'CROSS_POPUP'

export function addItem() {
    return {
        type: ADD_ITEM
    }
}

export function emptyCart() {
    return {
        type: EMPTY_CART
    }
}

export function crossPopup() {
    return {
        type: CROSS_POPUP
    }
}
export function applyCoupan(ckey, DiscountPercent) {
    return {
        type: APPLY_COUPAN,
        ckey,
        DiscountPercent
    }
}

export function addtoCart(ckey, finalValue) {
    return {
        type: ADDTO_CART,
        ckey,
        finalValue
    }
}

export function showhideCart(id) {
    return {
        type: SHOW_HODE_CART,
        id
    }
}