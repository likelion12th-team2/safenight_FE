import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as M from "../styles/styledMP";

const Mypage = ({ hour, min }) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/home`);
  };

  const goCounseller = () => {
    navigate("/memory/9");
  };

  const goDiary = () => {
    navigate("/diary/9");
  };

  const goEdit = () => {
    navigate("/mypage/edit");
  };

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
        <img
          onClick={goHome}
          id="back"
          src={`${process.env.PUBLIC_URL}/photos/back.svg`}
          alt="backbtn"
        />
        <div id="my">MY</div>
        <img
          id="headset"
          src={`${process.env.PUBLIC_URL}/photos/headset.svg`}
          alt="headset"
        />
        <img
          id="setting"
          src={`${process.env.PUBLIC_URL}/photos/setting.svg`}
          alt="setting"
        />
      </M.Background>
      <M.Information>
        <div id="hello">안녕하세요</div>
        <M.Name>
          <div id="name">홍길동</div>
          <div id="sama">님</div>
        </M.Name>
        <M.Email>
          <img
            id="me"
            src={`${process.env.PUBLIC_URL}/photos/me.png`}
            alt="me"
          />
          <div id="email">123456@naver.com</div>
          <div id="edit" onClick={goEdit}>
            기본정보수정
          </div>
          <img
            onClick={goEdit}
            id="go"
            src={`${process.env.PUBLIC_URL}/photos/newsback.svg`}
            alt="go"
          />
        </M.Email>
      </M.Information>
      <M.Button>
        <M.Medicine onClick={goHome}>
          <div id="detail">약 관리하기</div>
          <img
            id="go"
            src={`${process.env.PUBLIC_URL}/photos/newsback.svg`}
            alt="go"
          />
        </M.Medicine>
        <M.Exercise onClick={goHome}>
          <div id="detail">운동 / 일정</div>
          <img
            id="go"
            src={`${process.env.PUBLIC_URL}/photos/newsback.svg`}
            alt="go"
          />
        </M.Exercise>
        <M.Counseller onClick={goCounseller}>
          <div id="detail">상담기록</div>
          <img
            id="go"
            src={`${process.env.PUBLIC_URL}/photos/newsback.svg`}
            alt="go"
          />
        </M.Counseller>
        <M.Diary onClick={goDiary}>
          <div id="detail">일기쓰기</div>
          <img
            id="go"
            src={`${process.env.PUBLIC_URL}/photos/newsback.svg`}
            alt="go"
          />
        </M.Diary>
        <M.Save>
          <div id="detail">보관함</div>
          <img
            id="go"
            src={`${process.env.PUBLIC_URL}/photos/newsback.svg`}
            alt="go"
          />
        </M.Save>
      </M.Button>
      <M.Hr></M.Hr>
    </M.Container>
  );
};

export default Mypage;
