import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        first: "First Name",
        last: "Last Name",
        email: "Email",
        phone_number: "Phone Number",
        address: "Address",
    },
    reducers: {
        chooseName: (state, action) => { state.first = action.payload},
        chooseEmail: (state, action) => { state.last = action.payload},
        chooseState: (state, action) => { state.email = action.payload},
        chooseTeam: (state, action) => { state.phone_number = action.payload},
        chooseSport: (state, action) => { state.address = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseEmail, chooseState, chooseTeam, chooseSport} = rootSlice.actions