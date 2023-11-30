import { Suspense } from "react";
import { MainHeader } from ".";
import { TaskList, TaskModal } from "..";

const MainPage: React.FC = () => {
  return (
    <div className="container">
      <MainHeader />
      <Suspense fallback={<div>Loading</div>}>
        <TaskList />
      </Suspense>
      <TaskModal />
    </div>
  );
};

export default MainPage;
