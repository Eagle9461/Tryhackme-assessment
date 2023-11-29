import Modal from "react-modal";
import OutsideClickHandler from "react-outside-click-handler";
import BaseInputField from "./BaseInputField";
import BaseTextarea from "./BaseTextarea";
import BaseToogle from "./BaseToogle";
import { useTaskModalHook } from "./useTaskModalHook";
import { changeModalStatus } from "../store";
import { TaskModalStatus } from "../store/constants";

const TaskModal: React.FC = () => {
  const { isOpen, register, handleSubmit, onSubmit, dispatch, errors } =
    useTaskModalHook();

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Task Modal"
      ariaHideApp={false}
      className="modal-container bg-gray-800 relative"
      overlayClassName="modal-overlay"
    >
      <OutsideClickHandler
        onOutsideClick={() =>
          dispatch(
            changeModalStatus({
              modalStatus: TaskModalStatus.CLOSE,
              currentId: undefined,
            })
          )
        }
      >
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <button
            type="button"
            onClick={() =>
              dispatch(
                changeModalStatus({
                  modalStatus: TaskModalStatus.CLOSE,
                  currentId: undefined,
                })
              )
            }
            className="text-white hover:text-gray-300 focus:outline-none absolute top-3 right-3"
          >
            &#10006;
          </button>
          <div className="mb-5">
            <h1 className="flex justify-center font-bold text-white text-3xl">
              Create a new task
            </h1>
          </div>
          <BaseInputField
            type="text"
            id="title"
            placeholder="Enter the task title."
            autoFocus={true}
            required={true}
            label="Title"
            register={register}
            error={errors.title?.message}
          />
          <BaseTextarea
            id="desc"
            placeholder="Enter the task description."
            row={5}
            required={true}
            label="Description"
            register={register}
            error={errors.title?.message}
          />
          <div className="flex items-start mb-5">
            <BaseToogle register={register} />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create new task
            </button>
          </div>
        </form>
      </OutsideClickHandler>
    </Modal>
  );
};

export default TaskModal;
