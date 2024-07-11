import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as D from "../styles/styledDiary";
import axios from "axios";

const Diary = ({ hour, min, diarydataList }) => {
  const navigate = useNavigate();
  const { diaryId } = useParams();

  const [selectedDiary, setSelectedDiary] = useState(null);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/diary");
        setPostList(response.data); // API 응답으로 받은 데이터를 state에 저장
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, []);

  // diaryId가 유효하면 해당 일기를 선택
  useEffect(() => {
    if (diaryId) {
      const selected = diarydataList.find(
        (item) => item.diaryId === parseInt(diaryId)
      );
      setSelectedDiary(selected);
    } else {
      setSelectedDiary(null);
    }
  }, [diaryId, diarydataList]);

  return (
    <D.Container>
      <D.Bar style={{ flexDirection: "row" }}>
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
        {diarydataList.map((e) => (
          <div
            id="number"
            key={e.diaryId}
            onClick={() => {
              navigate(`/diary/${e.diaryId}`);
            }}
          >
            {e.diaryId}
          </div>
        ))}
      </D.Number>
      <D.Content>
        {selectedDiary && (
          <>
            <D.ConTitle>
              <div
                id="date"
                onClick={() => navigate(`/diary/${selectedDiary.date}`)}
              >
                {selectedDiary.date}
              </div>
              <D.ConSave>
                <div id="save">저장</div>
              </D.ConSave>
            </D.ConTitle>
            <D.Counseller>
              <div
                id={selectedDiary.content}
                onClick={() => navigate(`/diary/${selectedDiary.content}`)}
              >
                {selectedDiary.content}
              </div>
            </D.Counseller>
            <D.hr1></D.hr1>
          </>
        )}
      </D.Content>
    </D.Container>
  );
};

export default Diary;
