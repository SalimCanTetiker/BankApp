import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    total: 20000,
  };


const Slice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        addBalance(state, action){
            state.total -= parseInt(action.payload);
        }
    }
})
export default Slice
export const {addBalance} = Slice.actions ;