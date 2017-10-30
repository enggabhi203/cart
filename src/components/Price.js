//Price
import React from 'react';
import '../App.css';

const Price = ({ objstate, arr, ckey }) => {
    let item = arr[ckey]
    let discountLine;
    let paDis;
    if (item.gender === 'female') {
        if (objstate.flatDisFemale === 0) {
            paDis = (item.Price * (100 - item.discount)) / 100;
            paDis = Math.round(paDis * 100) / 100
            discountLine = <div><p className="text">Price: {item.Price} | Dis: {item.discount}%</p>
                <p className="text">final price: {paDis}</p></div>
        } else {
            paDis = (((item.Price * (100 - item.discount)) / 100) * (100 - objstate.flatDisFemale)) / 100
            paDis = Math.round(paDis * 100) / 100
            discountLine = <div>
                <p className="text">Price: {item.Price} | Dis: {item.discount} % | Add Dis: {objstate.flatDisFemale}%  </p>
                <p className="text">final price: {paDis}</p></div>

        }
    } else if (item.gender === 'male') {

        if (objstate.flatDisMale === 0) {
            paDis = (item.Price * (100 - item.discount)) / 100
            paDis = Math.round(paDis * 100) / 100
            discountLine = <div>
                <p className="text">Price: {item.Price} | Dis: {item.discount}%</p>
                <p className="text">final price: {paDis}</p></div>

        } else {
            paDis = (((item.Price * (100 - item.discount)) / 100) * (100 - objstate.flatDisMale)) / 100
            paDis = Math.round(paDis * 100) / 100
            discountLine = <div>
                <p className="text">Price: {item.Price} | Dis: {item.discount} % | Add Dis: {objstate.flatDisMale}%  </p>
                <p className="text">After Dis: {paDis}</p></div>
        }
    }
    return (
        <div>{discountLine}</div>
    )
}
export default Price;