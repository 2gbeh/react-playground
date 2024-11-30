import { createSlice } from "@reduxjs/toolkit";
import { ISlice } from "@/store/store.interface";
import { PatientEntity } from "./patients.interface";

interface IPatientsSlice extends ISlice {
  patients: null | PatientEntity[];
  patient: null | PatientEntity;
}

const initialState: IPatientsSlice = {
  isLoading: false,
  status: "idle",
  error: null,
  patients: null,
  patient: null,
};

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = patientsSlice.actions;
export default patientsSlice.reducer;
