import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/usersThunk';


interface User {
    id: string;
    firstName: string,
    lastName?: string
    email: string;
    role: string;
    phone: number;
}

interface UsersState {
    users: User[];
    total: number;
    loading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    users: [],
    total: 0,
    loading: false,
    error: null,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload.users;
                state.total = action.payload.total;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Failed to fetch users';
            });
    },
});

export default usersSlice.reducer;