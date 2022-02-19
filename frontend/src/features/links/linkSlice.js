import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import linkService from './linkService'

const initialState = {
    links: [],
    isError: false,
    isSuccess: false,
    isLoding: false,
    message: ''
}

// Create link
export const create = createAsyncThunk(
    'link/create',
    async(link, thunkAPI) => {
        try {
            return await linkService.createLink(link)
        } catch (error) {
            const message = 
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message || 
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const linkSlice = createSlice({
    name: 'link',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(create.pending, (state) => {
            state.isLoding = true
        })
        .addCase(create.fulfilled, (state, action) => {
            state.isError = false
            state.isSuccess = false
            state.isLoding = false
            // state.links = [...state.links, action.payload]
        })
        .addCase(create.rejected, (state, action) => {
            state.isError = true
            state.isSuccess = false
            state.isLoding = false
            state.message = action.payload
        })
    }
})

export const { reset } = linkSlice.actions
export default linkSlice.reducer