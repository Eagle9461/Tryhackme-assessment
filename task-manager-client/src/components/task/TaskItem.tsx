import { changeModalStatus, useAppDispatch } from "../../store";
import { ITaskItemProps, TaskModalStatus } from "../../types";

const TaskItem: React.FC<ITaskItemProps> = ({ task }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {task.title}
        </th>
        <td className="px-6 py-4">{task.desc}</td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
            ToDo
          </div>
        </td>
        <td className="px-6 py-4 flex gap-5">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </a>
          <a
            href="#"
            onClick={() =>
              dispatch(
                changeModalStatus({
                  modalStatus: TaskModalStatus.REMOVE,
                  currentId: task._id as string,
                })
              )
            }
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Delete
          </a>
        </td>
      </tr>
    </>
  );
};

export default TaskItem;
