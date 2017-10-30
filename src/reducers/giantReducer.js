//import { addItem, ADD_ITEM, EMPTY_CART, emptyCart, APPLY_COUPAN, applyCoupan } from '../actions/actions'

const giantReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            let newNum = state.cartItems + 1;
            return Object.assign({}, state, { cartItems: newNum })
        }
        case 'EMPTY_CART': {
            var newCart = [...state.cart];
            newCart = []
            return Object.assign({}, state, { cart: newCart })
        }
        case 'APPLY_COUPAN': {
            //console.log('In the reducer Apply coupan');
            let arr = state.cart
            let newArr = [...arr]
            let valFinal = Math.round((newArr[action.ckey].finalValue * (100 - action.DiscountPercent) / 100) * 100) / 100
            let newItem = Object.assign({}, newArr[action.ckey], { isOfferapp: true, finalValue: valFinal });
            newArr[action.ckey] = newItem;

            // let arrcart =state.cart;
            //  let newarrcart = [...arrcart]
            //let newpriceitem = Object.assign({}, newarrcart[action.ckey], { isOfferapp: true });


            return Object.assign({}, state, { cart: newArr })
            //return
        }
        case 'ADDTO_CART': {
            console.log(action.ckey);
            let arr = state.cart
            let newItem = Object.assign({}, state.shoppingItems[action.ckey], { finalValue: action.finalValue })
            let newArr = arr.concat([newItem])
            console.log('IN ADDTO_CART :: ' + newArr);
            return Object.assign({}, state, { cart: newArr })
        }
        case 'SHOW_HODE_CART': {
            let isV = state.isCartVisible;
            isV = !(isV)
            return Object.assign({}, state, { isCartVisible: isV })
        }

        case 'CROSS_POPUP': {
            let isV = state.isCartVisible;
            isV = !(isV)
            return Object.assign({}, state, { isCartVisible: isV })
        }
        default: {
            return state
        }
    }
}

export default giantReducer