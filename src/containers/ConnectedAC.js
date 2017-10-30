//ConnectedAC

import { connect } from 'react-redux'
import AppyCoupan from '../components/AppyCoupan'
import { applyCoupan } from '../actions/actions'


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
        onClick: (ckey, DiscountPercent) => {

            dispatch(applyCoupan(ckey, DiscountPercent))
        }
    }
}

const ConnectedAC = connect(mapStateToProps, mapDispatchToProps)(AppyCoupan)
export default ConnectedAC