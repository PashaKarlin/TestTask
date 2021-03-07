import { DELETE_PERSON, SUBMIT_FORM, UPDATE_AGE, UPDATE_NAME, UPDATE_PHONE, UPDATE_SURNAME } from "./types";
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    people: [],
    newName: '',
    newSurname: '',
    newAge: '',
    newPhone: ''
}



const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_FORM:
            const newPerson = {
                name: state.newName,
                surname: state.newSurname,
                phone: state.newPhone,
                age: state.newAge,
                id: uuidv4(),
            };
            return {
                people: [...state.people, newPerson],
                newName: '',
                newSurname: '',
                newAge: '', 
                newPhone: ''
            }
        case UPDATE_NAME:
            return {
                ...state,
                // newName: { data: action.name, isEmpty: false },
                newName: action.name
            }
        case UPDATE_SURNAME:
            return {
                ...state,
                // newSurname: { data: action.surname, isEmpty: false },
                newSurname: action.surname
            }
        case UPDATE_PHONE:
            return {
                ...state,
                // newPhone: { data: action.phone, isEmpty: false }
                newPhone: action.phone
            }
        case UPDATE_AGE:
            return {
                ...state,
                // newAge: { data: action.age, isEmpty: false }
                newAge: action.age
            }
        case DELETE_PERSON:
            return {
                ...state,
                people: state.people.filter(person => action.id !== person.id)
            }
        // case SET_STATUS:
        //     const findPerson = state.people.map(person => {
        //         if(state.people.id === person.id){
        //             person.status = true;
        //         }
        //         return {...state}
        //     })
        // return(findPerson)            
        default: return state;
    }

}

export default formReducer;