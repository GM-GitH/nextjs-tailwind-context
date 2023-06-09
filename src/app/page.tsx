"use client";
import { TaskCard } from "@/components/TaskCard";
import { useTasks } from "@/context/TaskContext";
import React from "react";

function Page() {
  const { tasks } = useTasks();
  return (
    <div>
      {tasks.map(task => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default Page;
