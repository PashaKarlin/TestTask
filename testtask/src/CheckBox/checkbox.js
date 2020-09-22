import React from 'react'

const CheckBox = ({handleCheck}) =>{
    return(
        <div>
            <input type = 'checkbox' onChange ={(e) => handleCheck()}/>
        </div>
    )
}

export default CheckBox;