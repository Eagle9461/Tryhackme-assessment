import modalSlice from "./modalSlice";
import { IModalStatusWithId } from "./constants";

const modalStatusActions = modalSlice.actions;

export const changeModalStatus = (modalStatusWithId: IModalStatusWithId)=> {
    return(modalStatusActions.setModalStatus(modalStatusWithId))
}
