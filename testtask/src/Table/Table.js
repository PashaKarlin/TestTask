import React, { useState } from 'react'
import Form from '../Form/Form'
import '../styles/table.css'


const Table = () => {

    const [people, setPeople] = useState([])

    const addPerson = (name, surname, phone, age, id) => {
        setPeople([...people, { name, surname, phone, age, id, status: false }])
    }
    let deletePerson = () => {
        people.map(item => {
            if(item.status === true) {
                console.log('deleted')
            }else{
                setPeople(item)
            }
        })
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
                        {people.map(person => {
                            if (person.name !== '') {
                                return (
                                    <tr>
                                        <td>
                                            <input type='checkbox'
                                                checked={person.status}
                                                onChange={(e) => {
                                                    let checked = e.target.checked;
                                                    setPeople(people.map(data => {
                                                        if (person.id === data.id) {
                                                            person.status = checked;
                                                        }
                                                        return data;
                                                    }))
                                                }}
                                            />
                                        </td>
                                        <td>{person.name}</td>
                                        <td>{person.surname}</td>
                                        <td>{person.phone}</td>
                                        <td>{person.age}</td>
                                        <td>
                                            <button className='delete_button' disabled={!person.status} onClick={() => deletePerson()}>Delete</button>
                                        </td>
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