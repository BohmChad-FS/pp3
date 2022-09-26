import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./pages/loginPage"
import Home from "./pages/home"

function App() {
  return (
    <div style={background}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

const background = {
  background: '#191414',
  height: '100vh'
}