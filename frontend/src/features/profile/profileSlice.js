import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import profileService from './profileService'

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// get user profile
export const getProfile = createAsyncThunk(
    'profile/get',
    async(username, thunkAPI) => {
        try {
            return await profileService.getProfile(username)
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

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProfile.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getProfile.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
        })
        .addCase(getProfile.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.message = action.payload
        })
    }
})

export const { reset } = profileSlice.actions
export default profileSlice.reducer