import React, { useState } from 'react'
import '../styles/form.scss'
import { v4 as uuidv4 } from 'uuid';


const Form = ({ addPerson }) => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');

    const handleSetName = (e) => {
        setName(e.target.value)
    }
    const handleSetSurname = (e) => {
        setSurname(e.target.value)
    }
    const handleSetPhone = (e) => {
        setPhone(e.target.value)
    }
    const handleSetAge = (e) => {
        setAge(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!!name  || !!surname  || !!phone  || (!!age && +age > 1)) {
            addPerson({ name, surname, phone, age, id: uuidv4() });
            setName('');
            setSurname('');
            setPhone('');
            setAge('');
        }
    }
    return (
        <div>
            <form className='form'>
                <fieldset className='fieldset'>
                    <div className='field'>
                        <label>Name :</label>
                        <input name='name' type='text' value={name} placeholder='ex: Pasha' onChange={handleSetName} required/>
                    </div>
                    <div className='field'>
                        <label>Surname :</label>
                        <input name='lastName' type='text' value={surname} placeholder='ex: Karlin' onChange={handleSetSurname} required />
                    </div>
                    <div className='field'>
                        <label>Phone Number :</label>
                        <input name='phone' type='text' value={phone} placeholder='ex: +380636074154' onChange={handleSetPhone} required = {true}/>
                    </div>
                    <div className='field'>
                        <label>Age : </label>
                        <input name='age' type='text' value={age} placeholder='ex: 20' onChange={handleSetAge} required/>
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
