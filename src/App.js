import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screen/home/home';
import MyPage from './screen/mypage/mypage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/mypage" element={<MyPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
