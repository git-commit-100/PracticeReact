import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";
import Card from "./UI/Card";

const data = [
  {
    id: "61adbeb48c4387b37d66e512",
    body: "Lorem nisi eiusmod nostrud aliquip. Consequat cillum officia tempor consectetur nulla.",
    title: "Lorem cillum",
  },
  {
    id: "61adbeb4271526b54c4a8b7f",
    body: "Sit pariatur ea elit incididunt sint proident mollit sint adipisicing aliqua ea enim irure. Eiusmod ex veniam mollit sunt est minim eu.",
    title: "enim ea sdfdfsd fsedefsdfdfsdf",
  },
  {
    id: "61adbeb488de4d6c6316628e",
    body: "Commodo cillum ad nostrud proident nostrud aliqua proident. Dolor non ex mollit laborum veniam enim dolor.",
    title: "mollit cupidatat",
  },
  {
    id: "61adbeb477069a3983be661e",
    body: "Quis minim quis ipsum ea ad dolor dolore ex mollit id. Commodo sint laborum sit sunt.",
    title: "tempor occaecat",
  },
  {
    id: "61adbeb40060f80b4c9c36e0",
    body: "Aute do excepteur sint magna ex consectetur qui fugiat sunt cillum. Adipisicing nostrud veniam in laborum.",
    title: "sunt elit",
  },
  {
    id: "61adbeb40066f80b4c9c36e0",
    body: "Aute do excepteur sint magna ex consectetur qui fugiat sunt cillum. Adipisicing nostrud veniam in laborum.",
    title: "sunt elit",
  },
];

function App() {
  const [tasks, setTasks] = useState(data);

  const handleAddingTask = (obj) => {
    console.table(obj);
  };

  let contentJsx = (
    <Card>
      <p className="no-tasks">" When your heart speaks , take good notes ! "</p>
    </Card>
  );
  if (tasks.length > 0) {
    contentJsx = <Tasks tasks={tasks} />;
  }

  return (
    <>
      <TaskForm onAddTask={handleAddingTask} />
      {contentJsx}
    </>
  );
}

export default App;
