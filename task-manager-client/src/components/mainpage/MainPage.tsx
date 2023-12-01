import { Suspense } from "react";
import { MainHeader } from ".";
import { ConfirmModal, TaskList, TaskModal } from "..";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import BaseSpiner from "../common/BaseSpinner";

const MainPage: React.FC = () => {
  return (
    <div className="container">
      <MainHeader />
      <Suspense fallback={<BaseSpiner />}>
        <TaskList />
      </Suspense>
      <ReactQueryDevtools />
      <TaskModal />
      <ConfirmModal />
    </div>
  );
};

export default MainPage;
