import { connect } from 'react-redux'



import Cart from '../components/Cart'
import { emptyCart, showhideCart, crossPopup } from '../actions/actions'




const gvValueToCart = (num) => {
    return num;
}

const mapStateToProps = (state) => {

    return {
        objstate: gvValueToCart(state)
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onClick: () => {
            dispatch(emptyCart())
        },
        onCartClick: (cartView) => {
             dispatch(showhideCart(cartView))
        },
        closePopup: () => {
            console.log('close popup dispatch');
            dispatch(crossPopup())
        }
    }

}

const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default ConnectedCart