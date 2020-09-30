import React from 'react'

const FormItem = ({labelname,nameValue,type,name,placeholder, onChangeFunc}) => {
    return (
        <div className='field'>
            <label>{labelname}</label>
            <input
                name={name}
                type={type} 
                value={nameValue}
                placeholder={placeholder}
                onChange = {onChangeFunc}
            />
        </div>
    )
}
export default FormItem;