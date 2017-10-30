import React from 'react';
import '../App.css';
import ConnectedPrice from '../containers/ConnectedPrice'
import Price from './Price'

const Item = ({ objstate, onClick, ckey }) => {
    let item = objstate.shoppingItems[ckey]
    let paDis;
    if (item.gender === 'female') {
        if (objstate.flatDisFemale === 0) {
            paDis = (item.Price * (100 - item.discount)) / 100;
            paDis = Math.round(paDis * 100) / 100
        } else {
            paDis = (((item.Price * (100 - item.discount)) / 100) * (100 - objstate.flatDisFemale)) / 100
            paDis = Math.round(paDis * 100) / 100
        }
    } else if (item.gender === 'male') {

        if (objstate.flatDisMale === 0) {
            paDis = (item.Price * (100 - item.discount)) / 100
            paDis = Math.round(paDis * 100) / 100
        } else {
            paDis = (((item.Price * (100 - item.discount)) / 100) * (100 - objstate.flatDisMale)) / 100
            paDis = Math.round(paDis * 100) / 100
        }
    }
    return (
        <div className="items" >
            <img src={item.url} alt="" height={175} />
            <p className="text"><strong>{item.Name}</strong></p>
            <p className="text">{item.description}</p>
            <span className="text">The Rating is : {item.Rating} out of 5</span>
            <ConnectedPrice arr={objstate.shoppingItems} ckey={ckey} />
            <button onClick={() => onClick(ckey, paDis)}>Add to cart</button>
        </div >
    )
}
export default Item