import { useAppDispatch, changeModalStatus } from "../../store";
import { TaskModalStatus } from "../../types";

const MainHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
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
  );
};

export default MainHeader;
