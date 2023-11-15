import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./interfaces/Interfaces";
import TodoList from "./components/TodoList";

// TypeScript, everything is strictly typed
// Uses Tailwind CSS
// The app component has a type of FC (Functional Component)
const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  // Inherits an interface for taskList
  // Interfaces are custom types
  const [taskList, setTaskList] = useState<ITask[]>([]);

  // Handling the onChange event
  const handlerOne = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  // Adds task to taskList state array
  const addTask = (): void => {
    // Make an object to pass as in the array
    const newTask = { taskName: task, deadline: deadline };
    setTaskList([...taskList, newTask]);
    setTask("");
    setDeadline(0);
  };

  // To remove task from the array
  const removeTask = (taskToRemove: string): void => {
    setTaskList(
      // Filter out the name that matches
      taskList.filter((task) => {
        return task.taskName !== taskToRemove;
      })
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-tl from-blue-400 to-cyan-500 flex justify-center ">
      <div className="h-96 mx-auto mt-40 sm:w-2/12  md:w-4/12 lg:w-2/4 bg-white rounded-lg flex flex-col">
        <div className="h-24 p-4 bg-emerald-800 rounded-t-lg flex place-content-around">
          <div className=" flex flex-col p-2 justify-center items-center">
            <input
              type="text"
              name="task"
              onChange={handlerOne}
              value={task}
              placeholder="Example: Do Chores"
              className="sm:w-20 md:w-40 lg:w-80 px-1 mb-1 border-solid border-2 border-black rounded-md outline-none"
            />
            <input
              type="number"
              name="deadline"
              onChange={handlerOne}
              value={deadline}
              placeholder="Deadline..."
              className="sm:w-20 md:w-40 lg:w-80 px-1 border-solid border-2 border-black rounded-md outline-none"
            />
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              onClick={addTask}
              className="h-10 bg-yellow-300 text-neutral-800 font-bold px-5 rounded-sm"
            >
              Add Task
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center bg-neutral-300 rounded-b-lg">
          {taskList.map((task: ITask, key: number) => {
            return <TodoList key={key} task={task} removeTask={removeTask} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

// PS. Implementating tailwind was much more harder than implementing typescript
