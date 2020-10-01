import React, { useState } from 'react'
import '../styles/form.scss'
// import '../styles/form.css'
import { v4 as uuidv4 } from 'uuid';
// import FormItem from '../FormItem/FormItem';


const Form = ({ addPerson }) => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [emptyName, setEmptyName] = useState(true)
    const [emptySurname, setEmptySurname] = useState(true)
    const [emptyPhone, setEmptyPhone] = useState(true)
    const [emptyAge, setEmptyAge] = useState(true)
  



    const handleSetName = (e) => {
        const value = e.target.value.trim().replace(/[^A-Za-zА-Яа-я]/g, '')
        setName(value)
        if (e.target.value != '') {
            setEmptyName(false)
        }else{
            setEmptyName(true)
        }
    }
    const handleSetSurname = (e) => {
        const value = e.target.value.trim().replace(/[^A-Za-zА-Яа-я]/g, '')
        setSurname(value)
        if (e.target.value != '') {
            setEmptySurname(false)
        }else{
            setEmptySurname(true)
        }
    }
    const handleSetPhone = (e) => {
        const value = e.target.value.trim().replace(/[\D]{1}/g, '')
        setPhone(value)
        if (e.target.value != '') {
            setEmptyPhone(false)
        }else{
            setEmptyPhone(true)
        }

    }
    const handleSetAge = (e) => {
        const value = e.target.value.trim().replace(/[\D]{1}/g, '')
        setAge(value)
        if (e.target.value != '') {
            setEmptyAge(false)
        }else{
            setEmptyAge(true)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emptyName && !emptySurname && !emptyPhone && !emptyAge) {
            addPerson({ name, surname, phone, age, id: uuidv4() });
            setName('');
            setSurname('');
            setPhone('');
            setAge('');
            setEmptyName(true)
            setEmptySurname(true)
            setEmptyPhone(true)
            setEmptyAge(true)
        }
    }
    return (
        <div>
            <form className='form'>
                <fieldset className='fieldset'>
                    <div className='field'>
                        <label>Name:</label>
                        <input
                            name='name'
                            type='text'
                            value={name}
                            placeholder='ex: Pasha'
                            onChange={handleSetName}
                            maxlength="15"
                        />
                    </div>

                    <div className='field'>
                        <label>Surname:</label>
                        <input
                            name='lastName'
                            type='text'
                            value={surname}
                            placeholder='ex: Karlin'
                            onChange={handleSetSurname}
                            maxlength="15"
                        />
                    </div>
                    <div className='field'>
                        <label>Phone Number:</label>
                        <input
                            name='phone'
                            type='text'
                            value={phone}
                            placeholder='ex: 380636074154'
                            onChange={handleSetPhone}
                            maxlength='12'
                        />
                    </div>
                    <div className='field'>
                        <label>Age(0-99): </label>
                        <input
                            name='age'
                            type='text'
                            value={age}
                            placeholder='ex: 20'
                            onChange={handleSetAge}
                            maxlength='2'
                        />
                    </div>
                    <button type='submit' onClick={handleSubmit} disabled={false}>
                        Submit
                    </button>
                </fieldset>
            </form>

        </div>
    )
};

// Form.propTypes = {

// }
export default Form;
