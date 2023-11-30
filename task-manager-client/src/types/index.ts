export enum TaskModalStatus {
  OPEN = "open",
  EDIT = "edit",
  CLOSE = "close",
  REMOVE = "remove",
}

export interface IModalStatusWithId {
  modalStatus: TaskModalStatus;
  currentId: string | undefined;
}

export interface ITask {
  _id: string | null;
  title: string;
  desc: string;
  taskStatus: boolean;
}

export interface IBaseInputFieldProps {
  type: string;
  _id: string;
  placeholder: string;
  autoFocus: boolean;
  required: boolean;
  label: string;
  register: any;
  error: string | undefined;
}

export interface IBaseTextarea {
  _id: string;
  placeholder: string;
  row: number;
  label: string;
  required: boolean;
  register: any;
  error: string | undefined;
}

export interface IBaseToogleProps {
  register: any;
}

export interface ITaskItemProps {
  task: ITask;
}

export interface IPaginatedTasks {
  data: ITask[];
  pageNumber: number | null;
}
