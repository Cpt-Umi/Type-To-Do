import React, { FC } from "react";
import { ITask } from "../interfaces/Interfaces";

// Defining an interface for the props
interface Props {
  task: ITask;
  removeTask(taskToRemove: string): void;
}

const TodoList: FC<Props> = ({ task, removeTask }) => {
  return (
    <div className="flex w-8/12 mt-1 h-8 bg-slate-300">
      <div className="basis-11/12 flex place-content-around ">
        <span className="bg-white w-full h-full flex items-center justify-center">
          {task.taskName}
        </span>
        <span className="bg-yellow-300 w-full h-full flex items-center justify-center">
          {task.deadline}
        </span>
      </div>
      <button
        onClick={() => {
          removeTask(task.taskName);
        }}
        className="basis-1/12 border-solid border-2 border-slate-600"
      >
        X
      </button>
    </div>
  );
};

export default TodoList;
