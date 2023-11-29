import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalStatusWithId, TaskModalStatus } from "./constants";

const initialModalStatus: IModalStatusWithId = {
    modalStatus: TaskModalStatus.CLOSE,
    currentId: undefined,
}

const modalSlice = createSlice({
    name: 'modalStatus',
    initialState: initialModalStatus,
    reducers: {
        setModalStatus(state, action: PayloadAction<IModalStatusWithId>) {
            state.modalStatus = action.payload.modalStatus;
            state.currentId = action.payload.currentId;
        },
    }
})

export default modalSlice;