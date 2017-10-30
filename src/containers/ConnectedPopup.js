//ConnectedPopup

import { connect } from 'react-redux'
import Popup from '../components/Popup'
import { crossPopup } from '../actions/actions'

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
        closePopup: () => {
            //console.log('close popup dispatch');
            dispatch(crossPopup())
        }
    }
}

const ConnectedPopup = connect(mapStateToProps, mapDispatchToProps)(Popup)
export default ConnectedPopup