import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import linkService from './linkService'

const initialState = {
    links: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create link
export const createLink = createAsyncThunk(
    'links/create',
    async(linkData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await linkService.createLink(linkData, token)
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

// Get user links
export const getLinks = createAsyncThunk(
    'links/get',
    // async(_, thunkAPI)
    async(username, thunkAPI) => {
        try {
            return await linkService.getLinks(username)
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
    name: 'links',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createLink.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createLink.fulfilled, (state, action) => {
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.links.push(action.payload)
        })
        .addCase(createLink.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.message = action.payload
        })
        .addCase(getLinks.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getLinks.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.links = action.payload
        })
        .addCase(getLinks.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.message = action.payload
        })
    }
})

export const { reset } = linkSlice.actions
export default linkSlice.reducer