import React, { useState } from 'react'
// import propTypes from 'prop-types'
import '../styles/form.scss'


const Form = ({ addPerson }) => {
    const [id,setId] = useState(1)
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addPerson(name, surname, phone, age, id)
        setName('');
        setSurname('');
        setPhone('');
        setAge('');
        let counter = id + 1;
        setId(counter);
        console.log(id)
    }
    return (
        <div>
            <form className='form'>
                <fieldset className='fieldset'>
                    <div className='field'>
                        <label>Name :</label>
                        <input name='name' type='text' value={name} placeholder='ex: Pasha' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='field'>
                        <label>Surname :</label>
                        <input name='lastName' type='text' value={surname} placeholder='ex: Karlin' onChange={(e) => setSurname(e.target.value)} />
                    </div>
                    <div className='field'>
                        <label>Phone Number :</label>
                        <input name='phone' type='text' value={phone} placeholder='ex: +380636074154' onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className='field'>
                        <label>Age : </label>
                        <input name='age' type='text' value={age} placeholder='ex: 20' onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button type='submit' onClick={handleSubmit} disabled ={false}>
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
