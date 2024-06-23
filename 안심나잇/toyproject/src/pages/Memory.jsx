import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as M from "../styles/styledMemory";

const Memory = ({ hour, min, dataList }) => {
  const navigate = useNavigate();

  const { memoryId } = useParams();

  const memory = memoryId
    ? dataList.find((item) => item.memoryId === parseInt(memoryId))
    : null;

  // const [btnActive, setBtnActive] = useState("");

  // const toggleActive = (e) => {
  //   setBtnActive((prev) => {
  //     return memoryId;
  //   });
  // };

  return (
    <M.Container>
      <M.Bar style={{ flexDirection: "row" }}>
        <div id="Time">
          {hour} : {min}
        </div>
        <div id="Connection">
          <img
            src={`${process.env.PUBLIC_URL}/photos/Cellular Connection.svg`}
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
        {dataList.map((e, memoryId) => (
          <div
            id="number"
            key={e.memoryId}
            onClick={() => {
              navigate(`/memory/${e.memoryId}`);
              // return toggleActive;
            }}
          >
            {e.memoryId}
          </div>
        ))}
      </M.Number>
      <M.Content>
        <M.ConTitle>
          <div id="date">{memory && memory.date}</div>
          <div id="doctor">{memory && memory.doctor}</div>
        </M.ConTitle>
        <M.Counseller>{memory && memory.content}</M.Counseller>
        <M.Newbtn style={{ textAlign: "center" }}>새글쓰기</M.Newbtn>
        <M.hr1></M.hr1>
      </M.Content>
    </M.Container>
  );
};
export default Memory;
