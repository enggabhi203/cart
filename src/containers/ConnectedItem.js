// ConnectedItem
import { connect } from 'react-redux'
import Item from '../components/Item'
import { addtoCart } from '../actions/actions'

const transferData = (obj) => {
    return obj;
}

const mapStateToProps = (state) => {
    console.log('in the MSTP of Item ' + state)
    return {
        objstate: transferData(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    // let objstate
    return {
        onClick: (ckey, finalValue) => {
            console.log('in DISPATCH PROPS   ' + ckey);
            dispatch(addtoCart(ckey, finalValue))
        }
    }
}
const ConnectedItem = connect(mapStateToProps, mapDispatchToProps)(Item)
export default ConnectedItem