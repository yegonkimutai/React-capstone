import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const mainUrl = 'https://date.nager.at/api/v3/publicholidays/2023/AT'

const initialState = []

export const getSeasons = createAsyncThunk('seasons/getSeasons', async () => {
    const response = await fetch(mainUrl)
    const result =  await response.json()
    const array = result.map((day) => ({
        date: day.date,
        name: day.name,
        local_name: day.locaName,
        status: day.global,
        position: day.fixed,
        type: day.types[0]
      }));
      return array
})

const seasonsSlice = createSlice({
    name: 'seasons',
    initialState,
    extraReducers: (builders) => {
        builders.addCase(getSeasons.fulfilled, (state, action) =>  action.payload)
    }
})

export default seasonsSlice.reducer;