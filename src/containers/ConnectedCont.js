import { connect } from 'react-redux'
import ItemsCont from '../components/ItemsCont'
import { addItem } from '../actions/actions'

const transferData = (arr) => {
    return arr;
}

const mapStateToProps = (state) => {
    console.log('in the MSTP  ' + state)
    return {
        objstate: transferData(state)
    }
}
const mapDispatchToProps = dispatch => {
    console.log('in MDTP')
    return {
        onItemClick: (i) => {
            dispatch(addItem())
        }
    }
}

const ConnectedCont = connect(mapStateToProps, mapDispatchToProps)(ItemsCont)
export default ConnectedCont 