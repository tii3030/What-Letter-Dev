import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import { T_Neuron } from '../../models/models'

const initialState: T_Neuron[] = []

export const NeuralSlice = createSlice({
    name: 'addNeural',
    initialState,
    reducers: {
        addNeural: (state, action: PayloadAction<[]>) => {
            state = (action.payload)
        },
    },
})

export const selectBook = (state: RootState) => state.neural
export const { addNeural } = NeuralSlice.actions

export default NeuralSlice.reducer