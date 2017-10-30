import React from 'react';
import ConnectedItem from '../containers/ConnectedItem'
import '../App.css';
const ItemsCont = ({ objstate }) => (
    <div className="itemsCont">
        {objstate.shoppingItems.map((a, i) => <ConnectedItem key={i} ckey = {i} />)}
    </div>
)

export default ItemsCont