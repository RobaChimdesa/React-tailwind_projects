import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-2xl text-red-600 bold underline">hello world</h1>
    </div>
  );
}

export default App;
