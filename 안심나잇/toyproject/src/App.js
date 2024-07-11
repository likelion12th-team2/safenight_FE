import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Memory from "./pages/Memory";
import News from "./pages/News";
import Diary from "./pages/Diary";
import data from "./data.json";
import diarydata from "./diarydata.json";
import NewsSearch from "./pages/NewsSearch";
import Community from "./pages/Community";
import CC from "./pages/CommunityContent";
import CS from "./pages/CommunitySearach";
import CW from "./pages/CommunityWrite";
import LS from "./pages/LoginSuccess";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import MyPageEdit from "./pages/MyPageEdit";
import Login from "./pages/Login";
import Join from "./pages/Join";
import SitterHelp from "./pages/SitterHelp";

function App() {
  const today = new Date();
  const hour = useState(today.getHours());
  const min = useState(today.getMinutes());

  const [dataList, setDataList] = useState([]);

  const [diarydataList, setDiaryDatList] = useState([]);

  useEffect(() => {
    setDataList(data);
    setDiaryDatList(diarydata);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/memory/:memoryId"
          element={<Memory hour={hour} min={min} dataList={dataList} />}
        />
        <Route
          path="/diary/:diaryId"
          element={
            <Diary hour={hour} min={min} diarydataList={diarydataList} />
          }
        />
        <Route path="/news" element={<News hour={hour} min={min} />} />
        <Route path="/search" element={<NewsSearch hour={hour} min={min} />} />
        <Route
          path="/community"
          element={<Community hour={hour} min={min} />}
        />
        <Route path="/cs" element={<CS hour={hour} min={min} />} />
        <Route path="/cw" element={<CW hour={hour} min={min} />} />
        <Route path="/cc" element={<CC hour={hour} min={min} />} />
        <Route path="/login/success" element={<LS hour={hour} min={min} />} />
        <Route path="/home" element={<Home hour={hour} min={min} />} />
        <Route path="/mypage" element={<MyPage hour={hour} min={min} />} />
        <Route
          path="/mypage/edit"
          element={<MyPageEdit hour={hour} min={min} />}
        />
        <Route path="/" element={<Login hour={hour} min={min} />} />
        <Route path="/join" element={<Join hour={hour} min={min} />} />
        <Route
          path="/sitterhelp"
          element={<SitterHelp hour={hour} min={min} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// 하성언 과제
//하희2차pr
//하희3차pr완료~
//하희4차pr완료~
//하희마지막pr완료^^
// 제 비밀은 사실.................. 다음 시간에 to be continue~~
