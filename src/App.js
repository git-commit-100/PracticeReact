import React, { useCallback, useMemo } from "react";
import { useState } from "react/cjs/react.development";
import List from "./components/List/List";
import Button from "./components/UI/Button";

function App() {
  console.log("App Running");
  const [title, setTitle] = useState("List Title");

  const arr = useMemo(() => {
    return [4, 1, 9, 6, 5];
  }, []);

  const handleTitleChange = useCallback(() => {
    setTitle("New Title");
  }, []);

  return (
    <div className="App">
      <List title={title} items={arr} />
      <Button onClick={handleTitleChange}>Change Title</Button>
    </div>
  );
}

export default App;
