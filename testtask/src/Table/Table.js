import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import '../styles/table.css'
import Form from '../Form/Form'
import TableItem from '../TableItem/TableItem'

const numberTypes = ['phone', 'age']
const Table = () => {
    const people = useSelector(state => state.form.people)
    const [sorted, setSorted] = useState(false)
    const sortedArrayOfPeople = [...people]
    const [type, setType] = useState('')

    const renderTableItem = (person) => {
        return (
            <TableItem
                name={person.name}
                surname={person.surname}
                phone={person.phone}
                age={person.age}
                personalId={person.id}
            />)
    }

    const sortirovka = () => {
        return (
            sortedArrayOfPeople.sort((a, b) => {
                const isNumberType = numberTypes.includes(type)
                const aObj = getTruthField(isNumberType, a)
                const bObj = getTruthField(isNumberType, b)
                if (aObj > bObj) return 1
                if (aObj < bObj) return -1
                return 0;
            }))

    }
    const getTruthField = (isNumberType, object) => {
        return isNumberType ? +object[type] : object[type].toLowerCase()
    }
    const handleChangeSortType = (e) => {
        setType(e.target.value)
        setSorted(true)
    }
    const handleUnsort = () => {
        setSorted(false)
    }

    return (
        <div className='table_form'>
            <div className='form_item'>
                <Form />
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
                            <th >Delete</th>
                        </tr>
                        {(sorted === false) ? people.map(renderTableItem) : sortirovka().map(renderTableItem)}

                    </tbody>
                </table>
                <button value='name' type="button" className="btn btn-secondary" onClick={handleChangeSortType}>
                    Sort By Name
                </button>
                <button value='surname' type="button" className="btn btn-secondary" onClick={handleChangeSortType}>
                    Sort By Surname
                </button>
                <button value='phone' type="button" className="btn btn-secondary" onClick={handleChangeSortType}>
                    Sort By Phone
                </button>
                <button value='age' type="button" className="btn btn-secondary" onClick={handleChangeSortType}>
                    Sort By Age
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleUnsort}>
                    Unsort
                </button>
            </div>
        </div>
    )
}


export default Table;