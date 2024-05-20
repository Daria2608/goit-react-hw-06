import { createSlice } from "@reduxjs/toolkit";
import data from '../contacts.json'

const slice = createSlice({
    name: 'contacts',
    initialState: {  items: data },
    reducers: {
        addContact: {
            reducer: (state, action) => {
                state.items.push(action.payload);

            },
            prepare: (value) => {
                return {
                  payload: {
                    id: crypto.randomUUID(),
                    name: value.name,
                    number: value.number
                }   
                }
            }
        },
        deleteContact: (state, action) => {
         state.items = state.items.filter(contact => contact.id !== action.payload)
        },
    }
},
);
 
export default slice.reducer;
export const { addContact, deleteContact } = slice.actions;
