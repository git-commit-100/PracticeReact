import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";
import Card from "./UI/Card";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);
  const [appError, setAppError] = useState(null);
  const { loading, error, sendRequest } = useHttp();

  function dataTransform(data) {
    const loadingTasks = [];

    for (let key in data) {
      //converting id into firebase generated id
      let newTask = {
        ...data[key],
        id: key,
      };
      loadingTasks.push(newTask);
    }

    setTasks(loadingTasks);
  }

  useEffect(() => {
    sendRequest(
      {
        url: "https://react-https-61e56-default-rtdb.firebaseio.com/tasks.json",
      },
      dataTransform
    );
  }, [sendRequest]);

  function handleAddingTask(taskObj) {
    const updatedTasks = [...tasks, taskObj];
    setTasks(updatedTasks);
  }

  function handleDeleteTask(id) {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  }

  function handleErrors(err) {
    setAppError(err.message);
  }

  let contentJsx = (
    <Card>
      <p className="no-tasks">" When your heart speaks , take good notes ! "</p>
    </Card>
  );

  if (loading) {
    contentJsx = (
      <Card>
        <p className="no-tasks">Loading....</p>
      </Card>
    );
  }

  if (error || appError) {
    contentJsx = (
      <Card>
        <p className="no-tasks">{error}</p>
      </Card>
    );
  }
  if (tasks.length > 0 && !error && !appError && !loading) {
    contentJsx = (
      <Tasks toDelete={handleDeleteTask} tasks={tasks} error={handleErrors} />
    );
  }

  return (
    <>
      <TaskForm onAddTask={handleAddingTask} error={handleErrors} />
      {contentJsx}
    </>
  );
}

export default App;
