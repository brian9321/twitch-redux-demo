import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: "",
  fullName: "",
  token: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser:(state, actions) => {
        state.email = actions.payload.email;
        state.fullName = actions.payload.fullName;
        state.token = actions.payload.token;
    },
    unSetUser:(state) => {
        state.email = "";
        state.fullName = "";
        state.token = "";
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, unSetUser } = userSlice.actions

export default userSlice.reducer