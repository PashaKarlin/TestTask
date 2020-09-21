import React, { useState } from 'react'
import Form from '../Form/Form'


const Table = () => {
    const [people, setPeople] = useState([
        { name: '', lastName: '', phone: '', age: '' }
    ])

    const addPerson = (name, lastName, phone, age) => {
        setPeople([...people, { name, lastName, phone, age }])
    }
    return (
        <div>
            <Form addPerson={addPerson} />
            <div>
                {'Name LastName Phone Age'}
            </div>
            {people.map(person => {
                return (
                    <div>{person.name + ' ' + person.lastName  + ' ' +  person.phone  + ' ' +  person.age}</div>
                )
            })}
        </div>
    )
}

export default Table;