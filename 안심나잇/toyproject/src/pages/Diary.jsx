import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as D from "../styles/styledDiary";

const Diary = ({ hour, min, diarydataList }) => {
  const navigate = useNavigate();

  const { diaryId } = useParams();

  const diary = diaryId
    ? diarydataList.find((item) => item.diaryId === parseInt(diaryId))
    : null;

  // const [btnActive, setBtnActive] = useState("");

  // const toggleActive = (e) => {
  //   setBtnActive((prev) => {
  //     return memoryId;
  //   });
  // };

  return (
    <D.Container>
      <D.Bar style={{ flexDirection: "row" }}>
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
      </D.Bar>
      <D.Background>
        <D.Backbtn>
          <img
            src={`${process.env.PUBLIC_URL}/photos/back.svg`}
            alt="backbtn"
          />
        </D.Backbtn>
        <D.Title>일기</D.Title>
      </D.Background>
      <D.hr />
      <D.Date>
        <D.Before>
          <img
            src={`${process.env.PUBLIC_URL}/photos/before.svg`}
            alt="before"
          />
        </D.Before>
        <D.Month>5월</D.Month>
        <D.After>
          <img src={`${process.env.PUBLIC_URL}/photos/after.svg`} alt="after" />
        </D.After>
      </D.Date>
      <D.Day>
        <div id="monday">월</div>
        <div id="tuesday">화</div>
        <div id="wednesday">수</div>
        <div id="thursday">목</div>
        <div id="friday">금</div>
        <div id="saturday">토</div>
        <div id="sunday">일</div>
      </D.Day>
      <D.Number>
        {diarydataList.map((e, diaryId) => (
          <div
            id="number"
            key={e.diaryId}
            onClick={() => {
              navigate(`/diary/${e.diaryId}`);
              // return toggleActive;
            }}
          >
            {e.diaryId}
          </div>
        ))}
      </D.Number>
      <D.Content>
        <D.ConTitle>
          <div id="date">{diary && diary.date}</div>
          <D.ConSave>
            <div id="save">저장</div>
          </D.ConSave>
        </D.ConTitle>
        <D.Counseller>{diary && diary.content}</D.Counseller>
        <D.hr1></D.hr1>
      </D.Content>
    </D.Container>
  );
};

export default Diary;
