import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screen/home/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home}></Route>
        {/* <Route path="/" component={}></Route>
        <Route path="/" component={}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
