import { Task } from "@/context/TaskContext";
import { useRouter } from "next/navigation";

export function TaskCard({ task }: { task: Task }) {
  const router = useRouter();
  return (
    <div
      className="bg-gray-900 text-white"
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <h1 className="text-2xl">{task.title}</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Delete</button>
      <p>{task.description}</p>
    </div>
  );
}
