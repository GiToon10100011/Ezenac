import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/page/MainPage";
import PostViewPage from "./components/page/PostViewPage";
import PostWritePage from "./components/page/PostWritePage";

const MainTitleText = styled.h2`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText className="App">동훈이 블로그</MainTitleText>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post-write" element={<PostWritePage />} />
        <Route path="/post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
