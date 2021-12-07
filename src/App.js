import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";
import Card from "./UI/Card";
import axios from "axios";

const url = "https://react-https-61e56-default-rtdb.firebaseio.com/tasks.json";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //firebase general methods
  async function getRequest(url) {
    try {
      setLoading(true);
      const response = await axios.get(url);
      const tasksToBeLoaded = [];

      for (let key in response.data) {
        tasksToBeLoaded.push(response.data[key]);
      }
      setLoading(false);
      setTasks(tasksToBeLoaded);
    } catch (error) {
      setError(error.message + " , Try again ?!");
    }
  }

  async function postRequest(url, data) {
    try {
      const response = await axios.post(url, data);
    } catch (error) {
      setError(error.message + " , Try again ?!");
    }
  }

  async function deleteRequest(url, id) {
    try {
      const response = await axios.delete(url, { data: { id: id } });
      console.log(response);
    } catch (error) {
      setError(error.message + " , Try again ?!");
    }
  }

  useEffect(() => {
    getRequest(url);
  }, []);

  const handleAddingTask = (obj) => {
    //POST request
    postRequest(url, obj);
    setTasks((prevTasks) => {
      return [...prevTasks, obj];
    });
  };

  const handleDeleteTask = (taskId) => {
    const taskToBeDeleted = tasks.find((task) => {
      return task.id === taskId;
    });
    if (
      window.confirm(
        `Do you really want to delete post-it with title ${taskToBeDeleted.title} ?`
      )
    ) {
      deleteRequest(url, taskToBeDeleted.id);
      const updatedTasks = tasks.filter((task) => {
        return task.id !== taskId;
      });
      setTasks(updatedTasks);
    }
  };

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

  if (error) {
    contentJsx = (
      <Card>
        <p className="no-tasks">{error}</p>
      </Card>
    );
  }
  if (tasks.length > 0 && !error && !loading) {
    contentJsx = <Tasks toDelete={handleDeleteTask} tasks={tasks} />;
  }

  return (
    <>
      <TaskForm onAddTask={handleAddingTask} />
      {contentJsx}
    </>
  );
}

export default App;
