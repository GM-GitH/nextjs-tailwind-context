'use client';
import { createContext, useContext } from "react";

export const TaskContext = createContext<{ tasks: Task[] }>({
  tasks: [],
});

interface ChildrenProps {
  children: React.ReactNode;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: boolean;
}

interface TasksProps {
  tasks: Task[];
}

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }: ChildrenProps) => {
  const tasks: Task[] = [];
  return (
    <TaskContext.Provider value={{ tasks }}>
      {children}
    </TaskContext.Provider>
  );
};
