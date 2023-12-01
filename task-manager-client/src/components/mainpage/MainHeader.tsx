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
          className="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Create New Task
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
