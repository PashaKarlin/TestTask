import React, { useState } from 'react'
import Form from '../Form/Form'
import '../styles/table.css'


const Table = () => {
    const [people, setPeople] = useState([
        { name: '', surname: '', phone: '', age: '' }
    ])
    
    const addPerson = (name, surname, phone, age) => {
        setPeople([...people, { name, surname, phone, age }])
    }
    return (
        <div className='table_form'>
            <Form addPerson={addPerson} />
            <div className='add_table'>
                <table>
                    <tr className='row_block'>
                        <th className='row'>Select</th>
                        <th className='row'>Name</th>
                        <th className='row'>Surname</th>
                        <th className='row'>Phone</th>
                        <th className='row'>Age</th>
                    </tr>
                    {people.map(person => {
                        if (person.name !== ''){
                            return (
                                <tr><td>{person.name}</td><td>{person.surname}</td><td>{person.phone}</td><td>{person.age}</td></tr>
                            )
                        }
                        
                    })}
                </table>

            </div>

        </div>
    )
}

export default Table;