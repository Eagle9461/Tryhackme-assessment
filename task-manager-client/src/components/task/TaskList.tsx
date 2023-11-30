import React, { useState } from "react";
import { TaskItem } from "..";
import { ITask } from "../../types";
import { useTaskListHook } from "./hooks";

const TaskList: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const { data: tasks } = useTaskListHook(page);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.data.map((task: ITask) => (
            <TaskItem key={task._id} task={task} />
          ))}
        </tbody>
      </table>
      <div
        className="flex items-center flex-column flex-wrap md:flex-row justify-end pt-4"
        aria-label="Table navigation"
      >
        <button
          disabled={page === 1 ? true : false}
          onClick={() => setPage(page - 1)}
          className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={tasks.pageNumber ? false : true}
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TaskList;
