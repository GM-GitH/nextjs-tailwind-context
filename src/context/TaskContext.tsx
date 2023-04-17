"use client";
import { createContext, useContext } from "react";

export const TaskContext = createContext<{ tasks: Task[] }>(
  {
    tasks: [],
  }
);

interface ChildrenProps {
  children: React.ReactNode;
}

export interface Task {
  id?: number;
  title?: string;
  description?: string;
  status?: boolean;
}

interface TasksProps {
  tasks: Task[];
}

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error(
      "useTasks must be used within a TaskProvider"
    );
  }
  return context;
};

export const TaskProvider = ({
  children,
}: ChildrenProps) => {
  const tasks: Task[] = [
    {
      id: 0,
      title: "Task 0",
      description: "Description 0",
      status: false,
    },
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      status: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
      status: false,
    },
  ];
  return (
    <TaskContext.Provider value={{ tasks }}>
      {children}
    </TaskContext.Provider>
  );
};
