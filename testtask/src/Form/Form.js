import React from 'react'
import '../styles/form.scss'
import { submitForm, updateAge, updateName, updatePhone, updateSurname } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
    const person = useSelector(state => ({
        name : state.form.newName,
        surname : state.form.newSurname,
        phone : state.form.newPhone,
        age : state.form.newAge
    }))
    const dispatch = useDispatch()
    
   
    const handleSetName = (e) => {
        const value = e.target.value.trim().replace(/[^A-Za-zА-Яа-я]/g, '')
        dispatch(updateName(value))
    }
    const handleSetSurname = (e) => {
        const value = e.target.value.trim().replace(/[^A-Za-zА-Яа-я]/g, '')
        dispatch(updateSurname(value))        
    }
    const handleSetPhone = (e) => {
        const value = e.target.value.trim().replace(/[\D]{1}/g, '')
        dispatch(updatePhone(value))
    }
    const handleSetAge = (e) => {
        const value = e.target.value.trim().replace(/[\D]{1}/g, '')
        dispatch(updateAge(value))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitForm())
        
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
                            value = {person.name}
                            placeholder='ex: Pasha'
                            onChange={handleSetName}
                            maxLength="15"
                        />
                    </div>

                    <div className='field'>
                        <label>Surname:</label>
                        <input
                            name='surname'
                            type='text'
                            value = {person.surname}
                            placeholder='ex: Karlin'
                            onChange={handleSetSurname}
                            maxLength="15"
                        />
                    </div>
                    <div className='field'>
                        <label>Phone Number:</label>
                        <input
                            name='phone'
                            type='text'
                            value = {person.phone}
                            placeholder='ex: 380636074154'
                            onChange={handleSetPhone}
                            maxLength='12'
                        />
                    </div>
                    <div className='field'>
                        <label>Age(0-99): </label>
                        <input
                            name='age'
                            type='text'
                            value = {person.age}
                            placeholder='ex: 20'
                            onChange={handleSetAge}
                            maxLength='2'
                        />
                    </div>
                    <button type='submit' className = "btn btn-primary" onClick={handleSubmit} disabled={false}>
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
