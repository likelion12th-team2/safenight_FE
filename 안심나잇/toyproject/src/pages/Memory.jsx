import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as M from "../styles/styledMemory";
import axios from "axios";

const Memory = ({ hour, min, dataList }) => {
  const navigate = useNavigate();
  const { memoryId } = useParams();

  const [selectedMemory, setSelectedMemory] = useState(null);

  const goMypage = () => {
    navigate(`/mypage`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // memoryId가 있을 때만 API 요청
        if (memoryId) {
          const response = await axios.get(
            `http://127.0.0.1:8000/consultLog/${memoryId}`
          );
          setSelectedMemory(response.data); // API 응답으로 받은 데이터를 state에 저장
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, [memoryId]);

  // number 클릭 시 해당 diaryId로 navigate하는 함수
  const handleNumberClick = (id) => {
    navigate(`/consultLog/${id}`);
  };

  return (
    <M.Container>
      <M.Bar style={{ flexDirection: "row" }}>
        <div id="Time">
          {hour} : {min}
        </div>
        <div id="Connection">
          <img
            src={`${process.env.PUBLIC_URL}/photos/Cellular_Connection.svg`}
            alt="connection"
          />
        </div>
        <div id="Wifi">
          <img src={`${process.env.PUBLIC_URL}/photos/WiFi.svg`} alt="Wifi" />
        </div>
        <div id="Battery">
          <img
            src={`${process.env.PUBLIC_URL}/photos/Battery.svg`}
            alt="Battery"
          />
        </div>
      </M.Bar>
      <M.Background>
        <M.Backbtn>
          <img
            onClick={goMypage}
            src={`${process.env.PUBLIC_URL}/photos/back.svg`}
            alt="backbtn"
          />
        </M.Backbtn>
        <M.Title>상담 기록</M.Title>
      </M.Background>
      <M.hr />
      <M.Date>
        <M.Before>
          <img
            src={`${process.env.PUBLIC_URL}/photos/before.svg`}
            alt="before"
          />
        </M.Before>
        <M.Month>5월</M.Month>
        <M.After>
          <img src={`${process.env.PUBLIC_URL}/photos/after.svg`} alt="after" />
        </M.After>
      </M.Date>
      <M.Day>
        <div id="monday">월</div>
        <div id="tuesday">화</div>
        <div id="wednesday">수</div>
        <div id="thursday">목</div>
        <div id="friday">금</div>
        <div id="saturday">토</div>
        <div id="sunday">일</div>
      </M.Day>
      <M.Number>
        {dataList.map((e) => (
          <div
            id="number"
            key={e.memoryId}
            onClick={() => handleNumberClick(e.memoryId)}
          >
            {e.memoryId}
          </div>
        ))}
      </M.Number>
      <M.Content>
        <M.ConTitle>
          {selectedMemory && (
            <>
              <div id="date">{selectedMemory.date}</div>
              <div id="doctor">{selectedMemory.doctor}</div>
            </>
          )}
        </M.ConTitle>
        <M.Counseller>
          {selectedMemory && <div id="content">{selectedMemory.content}</div>}
        </M.Counseller>
        <M.Newbtn style={{ textAlign: "center" }}>새글쓰기</M.Newbtn>
        <M.hr1></M.hr1>
      </M.Content>
    </M.Container>
    // 상담 연동 ㅎㅎㅎ
  );
};
export default Memory;
