import React, { useState, useEffect } from 'react'
import Form from '../Form/Form'
import '../styles/table.css'
import TableItem from '../TableItem/TableItem'
import { v4 as uuidv4 } from 'uuid';

const numberTypes = ['phone', 'age']

const Table = () => {
    const [people, setPeople] = useState(JSON.parse(localStorage.getItem('people')) || [])
    const [type, setType] = useState('')

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
    const sortirovka = () => {
        if (!type) {
            return people;
        } else {
            return people.sort((a, b) => {
                const isNumberType = numberTypes.includes(type)
                const aObj = getTruthField(isNumberType, a)
                const bObj = getTruthField(isNumberType, b)
                if (aObj > bObj) return 1
                if (aObj < bObj) return -1
                return 0;
            })
        }
    }

    const getTruthField = (isNumberType, object) => {
        return isNumberType ? +object[type] : object[type].toLowerCase()
    }

    const handleChangeSortType = (e) => {
        setType(e.target.name)
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
                            <th >
                                Name
                            </th>
                            <th >
                                Surname
                            </th>
                            <th >
                                Phone
                            </th>
                            <th >
                                Age
                            </th>
                            <th> Delete</th>
                        </tr>
                        {sortirovka().map(renderTableItem)}
                    </tbody>
                </table>
                <button name='name' activeClassName='button_style' onClick={handleChangeSortType}>
                    Sort By Name
                </button>
                <button name='surname' onClick={handleChangeSortType}>
                    Sort By Surname
                </button>
                <button name='phone' onClick={handleChangeSortType}>
                    Sort By Phone
                </button>
                <button name='age' onClick={handleChangeSortType}>
                    Sort By Age
                </button>
                <button name='' onClick={handleChangeSortType}>
                    UnSorted
                </button>
            </div>

        </div>
    )
}

export default Table;