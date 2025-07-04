import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [message, setMessage] = useState("Hello World");
  const [name, setName] = useState("");

  return (
    <div className="container">
      <h1>{message}</h1>
      <p>Welcome to my first React app!</p>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setMessage(`Hello, ${name || "World"}!`)}>
        Greet Me
      </button>
    </div>
);
}
