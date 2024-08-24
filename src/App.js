import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./screen/home/home";
import MyPage from "./screen/mypage/mypage";
import OthersPage from "./screen/other's_page/other's_page";
import BestPage from "./screen/bestpage/bestpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/other/" element={<OthersPage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/bestpage" element={<BestPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
