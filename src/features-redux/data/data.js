import { createSlice } from '@reduxjs/toolkit';
import PRODUCTSJOSN from '../../cars.json'

const initialState = {
    productsCar : PRODUCTSJOSN.car,
    num : 1
}
const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {}
})

export default dataSlice.reducer




