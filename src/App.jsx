import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import ChatMain from "./components/Chat-main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<ChatMain />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
