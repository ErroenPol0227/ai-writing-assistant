// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import { Button, Typography, Container } from '@mui/material';

// function App() {
//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         ✨ MUI + CRA + TypeScript
//       </Typography>
//       <Button variant="contained" color="primary">
//         테스트 버튼
//       </Button>
//     </Container>
//   );
// }

// src/App.tsx
import React from "react";
import Editor from "./components/Editor";
import {useState} from "react"

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Editor />
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </div>
  );
}

export default App;
