//AppyCoupan
//import { connect } from 'react-redux'
import React from 'react';
import { applyCoupan } from '../actions/actions'

let AppyCoupan = ({ objstate, onClick, ckey }) => {
    let input;
    let inpstyle = {
        width: 50
    }
    return (
        <div>
            <input type='text' ref={node => { input = node }} style={inpstyle} placeholder='Enter code'></input>
            <button onClick={() => {
                /* objstate.additionalDiscount.some(function (currEle, index, arr) {
                    console.log('in the some :: ' + currEle + "::sfsdf ::" + input);
                    if (input.value === currEle.OfferCode) {
                        console.log('coupan applied');
                        <p>Final price: {objstate.cart[ckey].finalValue} </p>
                        onClick(ckey, currEle.DiscountPercent);
                        
                        
                    }
                    else {
                        console.log('not applied');
                    }
                }); */

                for (let i = 0; i < objstate.additionalDiscount.length; i++) {
                    console.log('In the for loop');
                    if (input.value === objstate.additionalDiscount[i].OfferCode) {
                        console.log('coupan applied');
                        onClick(ckey, objstate.additionalDiscount[i].DiscountPercent);
                        break;
                    }
                }


            }}>Apply code</button>
            <p>Final price: {objstate.cart[ckey].finalValue} </p>
        </div>
    )

}

export default AppyCoupan
