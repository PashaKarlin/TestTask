import React, { useState } from 'react'
import CheckBox from '../CheckBox/checkbox'
import Form from '../Form/Form'
import '../styles/table.css'


const Table = () => {
    const [people, setPeople] = useState([
        { name: '', surname: '', phone: '', age: '' }
    ])
    const [check, setCheck] = useState(false)

    const handleCheck = (e) => {
        setCheck(!check)
    }
    const addPerson = (name, surname, phone, age) => {
        setPeople([...people, { name, surname, phone, age }])
    }
    return (
        <div className='table_form'>
            <div >
                <Form addPerson={addPerson} />
            </div>
            <div className='table_item'>
                <table className = 'table_border'>
                    <tbody>
                    <tr className='row_block'>
                        <th className='row'>Select</th>
                        <th className='row'>Name</th>
                        <th className='row'>Surname</th>
                        <th className='row'>Phone</th>
                        <th className='row'>Age</th>
                    </tr>
                    {people.map(person => {
                        if (person.name !== '') {
                            return (
                                <tr>
                                    <td><CheckBox handleCheck={handleCheck} /></td>
                                    <td>{person.name}</td>
                                    <td>{person.surname}</td>
                                    <td>{person.phone}</td>
                                    <td>{person.age}</td>
                                </tr>
                            )
                        }
                    })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table;