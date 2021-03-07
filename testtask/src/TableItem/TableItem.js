import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePerson } from '../redux/actions'

const TableItem = ({ name, surname, phone, age, personalId }) => {
    // const people = useContext(state => state.form.people)
    const [status, setStatus] = useState(false)
    const dispatch = useDispatch()
    const checkBoxHandler = () => {
       setStatus(!status)
    }
    const deleteHandler = (e) => {
        const currentID = personalId
        dispatch(deletePerson(currentID) )    
        console.log(currentID)   
    }

    return (
        <tr>
            <td>
                <input type='checkbox' checked={status} onChange={checkBoxHandler} />
            </td>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{phone}</td>
            <td>{age}</td>
            <td>
                <button className='delete_button' disabled={status ? false : true} onClick={deleteHandler}>Delete</button>
            </td>
        </tr>
    )
}


export default TableItem;