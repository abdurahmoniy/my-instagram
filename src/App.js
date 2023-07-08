import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
