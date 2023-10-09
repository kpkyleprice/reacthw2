import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: " Name",
        email: "Email",
        state: "State",
        team: "Team",
        sport: "Sport",
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseEmail: (state, action) => { state.email = action.payload},
        chooseState: (state, action) => { state.state = action.payload},
        chooseTeam: (state, action) => { state.team = action.payload},
        chooseSport: (state, action) => { state.sport = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseEmail, chooseState, chooseTeam, chooseSport} = rootSlice.actions