//ConnectedPrice
import { connect } from 'react-redux'
import Price from '../components/Price'

const gvValueToCart = (num) => {
    return num;
}
const mapStateToProps = (state) => {

    return {
        objstate: gvValueToCart(state)
    }
}

const ConnectedPrice = connect(mapStateToProps)(Price)
export default ConnectedPrice