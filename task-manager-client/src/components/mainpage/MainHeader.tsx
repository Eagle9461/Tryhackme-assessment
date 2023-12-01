import { useAppDispatch, changeModalStatus } from "../../store";
import { TaskModalStatus } from "../../types";

const MainHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1 className="my-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Task Management
      </h1>
      <div className="flex justify-end mb-4">
        <button
          onClick={() =>
            dispatch(
              changeModalStatus({
                modalStatus: TaskModalStatus.OPEN,
                currentId: undefined,
              })
            )
          }
          className="text-gray-500 bg-white p-2 rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          Create New Task
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
