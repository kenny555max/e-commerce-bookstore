import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    user: {}
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    },
})

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;