import { useQuery } from "@tanstack/react-query";
import { TaskList } from "../../components";
import TaskModal from "../../components/task/TaskModal";
import { useAppDispatch, changeModalStatus } from "../../store";
import { TaskModalStatus } from "../../types";
import { fetchTasks } from "../../services";

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { data: tasks } = useQuery({
    queryKey: ["fetchTasks"],
    queryFn: fetchTasks,
  });
  console.log(tasks);
  return (
    <div className="container">
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
      {/* <TaskList tasks={tasks} /> */}
      <TaskModal />
    </div>
  );
};

export default MainPage;