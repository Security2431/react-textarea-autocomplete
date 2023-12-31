import { useState } from "react";

import "./App.css";
import { TextArea } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TextArea />
    </>
  );
}

export default App;
