import { Suspense } from "react";
import { MainHeader } from ".";
import { ConfirmModal, TaskList, TaskModal } from "..";
import BaseSpiner from "../common/BaseSpinner";

const MainPage: React.FC = () => {
  return (
    <div className="container">
      <MainHeader />
      <Suspense fallback={<BaseSpiner />}>
        <TaskList />
      </Suspense>
      <TaskModal />
      <ConfirmModal />
    </div>
  );
};

export default MainPage;
