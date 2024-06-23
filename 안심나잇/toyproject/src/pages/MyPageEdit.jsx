import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as E from "../styles/styledMPE";

const MyPageEdit = ({ hour, min }) => {
  const navigate = useNavigate();

  const goMyPage = () => {
    navigate(`/mypage`);
  };

  return (
    <E.Container>
      <E.Bar style={{ flexDirection: "row" }}>
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
      </E.Bar>
      <E.Background>
        <img
          onClick={goMyPage}
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
      </E.Background>
      <E.Me>
        <img
          id="me"
          src={`${process.env.PUBLIC_URL}/photos/meedit.svg`}
          alt="me"
        />
      </E.Me>
      <E.Information>
        <div id="name">홍길동</div>
        <div id="email">123456@naver.com</div>
      </E.Information>
      <E.Line></E.Line>
      <E.Box>
        <E.Email>
          <div id="title">이메일</div>
          <E.D1>
            <div id="detail">123456@naver.com</div>
            <img
              id="go"
              src={`${process.env.PUBLIC_URL}/photos/newsback.svg`}
              alt="go"
            />
          </E.D1>
          <div id="line" />
        </E.Email>
        <E.Name>
          <div id="title">이름</div>
          <E.D2>
            <div id="detail">홍길동</div>
            <img
              id="go"
              src={`${process.env.PUBLIC_URL}/photos/newsback.svg`}
              alt="go"
            />
          </E.D2>
          <div id="line" />
        </E.Name>
        <E.Password>
          <div id="title">비밀번호</div>
          <E.D3>
            <div id="detail">●●●●●●●</div>
            <img
              id="go"
              src={`${process.env.PUBLIC_URL}/photos/newsback.svg`}
              alt="go"
            />
          </E.D3>
          <div id="line" />
        </E.Password>
        <E.Birthday>
          <div id="title">생년월일</div>
          <E.D4>
            <div id="detail">1980.10.07</div>
            <img
              id="go"
              src={`${process.env.PUBLIC_URL}/photos/newsback.svg`}
              alt="go"
            />
          </E.D4>
          <div id="line" />
        </E.Birthday>
      </E.Box>
      <E.Hr></E.Hr>
    </E.Container>
  );
};

export default MyPageEdit;
