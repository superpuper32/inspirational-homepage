import { createSlice, createAsyncThunk,  } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { BackgroundState } from '@/entities/background/model/types';
import { unsplashApi } from '@/shared/api/unsplash';

export const fetchBackground = createAsyncThunk(
    'background/fetchBackground',
    async () => {
        return await unsplashApi.getRandomBackground();
    }
);

const initialState: BackgroundState = {
    currentBackground: '',
    loading: false,
    error: null,
};

const backgroundSlice = createSlice({
    name: 'background',
    initialState,
    reducers: {
        setBackground: (state, action: PayloadAction<string>) => {
            state.currentBackground = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBackground.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBackground.fulfilled, (state, action) => {
                state.loading = false;
                state.currentBackground = action.payload;
            })
            .addCase(fetchBackground.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch background';
            });
    },
});

export const { setBackground } = backgroundSlice.actions;
export default backgroundSlice.reducer;
