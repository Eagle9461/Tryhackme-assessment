export enum TaskModalStatus  {
    OPEN = 'open',
    EDIT = 'edit',
    CLOSE = 'close',
    REMOVE = 'remove',
}

export interface IModalStatusWithId {
    modalStatus: TaskModalStatus;
    currentId: number | undefined,
}