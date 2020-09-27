import React, { useState } from 'react'
import Form from '../Form/Form'
import '../styles/table.css'
import TableItem from '../TableItem/TableItem'
import { v4 as uuidv4 } from 'uuid';


const Table = () => {
    const [people, setPeople] = useState(JSON.parse(localStorage.getItem('people')) || [])
    console.log(people)

    const setToLocalStorage = (localStoragePeople) => {
        localStorage.setItem('people', JSON.stringify(localStoragePeople))
    }
    const addPerson = ({ name, surname, phone, age, id }) => {
        const listOfPeople = [...people, { name, surname, phone, age, id, status: false }]
        setPeople(listOfPeople)
        setToLocalStorage(listOfPeople);
    }
    const removePerson = (id) => {
        const trueListOfPeople = people.filter(item => id !== item.id)
        setPeople(trueListOfPeople);
        setToLocalStorage(trueListOfPeople)
    }
    const renderTableItem = (person) => {
        return (
            <TableItem
                key={uuidv4()}
                person={person}
                setPeople={setPeople}
                people={people}
                removePerson={removePerson}
            />
        )
    }
    return (
        <div className='table_form'>
            <div >
                <Form addPerson={addPerson} />
            </div>
            <div className='table_item'>
                <table className='table_border'>
                    <tbody>
                        <tr className='row_block'>
                            <th >Select</th>
                            <th >Name</th>
                            <th >Surname</th>
                            <th >Phone</th>
                            <th >Age</th>
                            <th> Delete</th>
                        </tr>
                        {people.map(renderTableItem)}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table;