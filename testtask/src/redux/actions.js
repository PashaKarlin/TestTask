import { DELETE_PERSON, SUBMIT_FORM, UPDATE_AGE, UPDATE_NAME, UPDATE_PHONE, UPDATE_SURNAME } from "./types"

export const submitForm = () => ({ type: SUBMIT_FORM });
export const updateName = (name) => ({ type: UPDATE_NAME, name })
export const updateSurname = (surname) => ({ type: UPDATE_SURNAME, surname })
export const updatePhone = (phone) => ({ type: UPDATE_PHONE, phone })
export const updateAge = (age) => ({ type: UPDATE_AGE, age })
export const deletePerson = (id) => ({ type: DELETE_PERSON, id })
// export const setStatus = (id) => ({ type: SET_STATUS, id })
