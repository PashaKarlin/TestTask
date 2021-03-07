import React from 'react'

let TableItemWithHooks = ({ person, setPeople, people, removePerson }) => {
    const { status, name, surname, phone, age, id } = person

    const handleCheckBoxChange = () => {
        const trueListOfPeople = people.map(itemPerson => {
            if (itemPerson.id === id) {
                return {
                    ...itemPerson,
                    status: !status
                }
            }
            return itemPerson;
        })
        setPeople(trueListOfPeople)
    }
    const deletePerson = () => {
        removePerson(id)
    }

    return (
        <tr>
            <td>
                <input type='checkbox'
                    checked={status}
                    onChange={handleCheckBoxChange}
                />
            </td>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{phone}</td>
            <td>{age}</td>
            <td>
                <button className='delete_button' disabled={!status} onClick={deletePerson}>Delete</button>
            </td>
        </tr>
    )
}


export default TableItemWithHooks;