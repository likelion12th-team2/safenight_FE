import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as M from "../styles/styledMemory";
import axios from "axios";

const Memory = ({ hour, min }) => {
  const navigate = useNavigate();
  const { memoryId } = useParams();

  const [memoryList, setMemoryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/consultLog");
        setMemoryList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  memoryList.forEach((memory) => console.log(memory.date));
  console.log(memoryList.date);

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
        {memoryList.map((e) => (
          <div
            id="number"
            key={e.memoryId}
            onClick={() => {
              navigate(`/memory/${e.memoryId}`);
            }}
          >
            {e.memoryId}
          </div>
        ))}
      </M.Number>
      <M.Content>
        <M.ConTitle>
          {memoryList.map((e) => (
            <div id="date" key={`${e.memoryId}-date`}>
              {e.date}
            </div>
          ))}
          {memoryList.map((e) => (
            <div id="doctor" key={`${e.memoryId}-doctor`}>
              {e.doctor}
            </div>
          ))}
          {/* {memoryList.map((e) => (
            <div id="date">{e.date}</div>
          ))}
          {memoryList.map((e) => (
            <div id="date">{e.doctor}</div>
          ))} */}
        </M.ConTitle>
        <M.Counseller>
          <div id="content">{memoryList.content}</div>
        </M.Counseller>
        <M.Newbtn style={{ textAlign: "center" }}>새글쓰기</M.Newbtn>
        <M.hr1></M.hr1>
      </M.Content>
    </M.Container>
  );
};
export default Memory;
