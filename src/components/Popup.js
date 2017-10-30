//Popup
import React from 'react';
import '../App.css';
import Price from './Price'
import ConnectedPrice from '../containers/ConnectedPrice'
import ConnectedAC from '../containers/ConnectedAC'
import AppyCoupan from './AppyCoupan'


const Popup = ({ objstate, closePopup }) => {
    let arr = objstate.cart
    return (
        <div className='popup'>
            <div className='popup_inner'>
                <button onClick={closePopup} className='button'>[X]</button>
                {
                    arr.length === 0 ? <p>Your cart is empty</p> : <table>
                        <tbody>
                            {
                                arr.map((a, i) => <tr key={i}>
                                    <td>
                                        <div className="items" >
                                            <img src={a.url} alt="" height={100} />
                                        </div >
                                    </td>
                                    <td>
                                        <div className="items" >
                                            <p className="text"><strong>{a.Name}</strong></p>
                                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at optio nam asperiores ipsam voluptate eaque labore.</p>
                                            <span className="text">The Rating is : {a.Rating} out of 5</span>

                                            <ConnectedPrice arr={objstate.cart} ckey={i} />
                                            <ConnectedAC ckey={i} />
                                        </div >
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                }

            </div>
        </div>
    )
}
export default Popup;