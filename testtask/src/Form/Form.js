import React, { useState } from 'react'


const Form = ({addPerson}) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    // const [submit, isSubmit] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        addPerson(name,lastName,phone,age)
        setName('');
        setLastName('')
        setPhone('')
        setAge('')
    }
    return (
        <div>
            <form>
                <div>
                    <label>Name :</label>
                    <input name='name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name :</label>
                    <input name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Phone Number :</label>
                    <input name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <label>Age : </label>
                    <input name='age' value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
            </form>
            <button type='submit' onClick = {handleSubmit}>
                Submit
            </button>
        </div>
    )
};

export default Form;
