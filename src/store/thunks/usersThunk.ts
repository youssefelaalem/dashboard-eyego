import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async ({ limit = 10, skip = 0, search = "", filterRole = "", sortName = "" }: { limit: number, skip: number, search: string, filterRole: string, sortName: string }, thunkAPI) => {
        try {
            const url = search
                ? `https://dummyjson.com/users/search?q=${search}&limit=${limit}&skip=${skip}`
                : filterRole ?
                    `https://dummyjson.com/users/filter?key=role&value=${filterRole}`
                    : sortName ? `https://dummyjson.com/users?sortBy=${sortName}&order=asc`
                        : `https://dummyjson.com/users?limit=${limit}&skip=${skip}`;

            const response = await axios.get(url);
            return response.data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) {
                return thunkAPI.rejectWithValue(error.response.data);
            }
            return thunkAPI.rejectWithValue("Error fetching users");
        }
    }
);
