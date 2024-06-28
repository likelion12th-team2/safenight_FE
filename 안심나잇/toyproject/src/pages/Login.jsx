import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as L from "../styles/styledLogin";

const Login = ({ hour, min }) => {
  const navigate = useNavigate();

  const goLS = () => {
    navigate(`/login/success`);
  };
  return (
    <L.Container>
      <L.Bar style={{ flexDirection: "row" }}>
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
      </L.Bar>
      <L.Back>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/photos/back.svg`}
          alt="backbtn"
        />
      </L.Back>
      <L.Brand>
        <div id="name">안심나잇 </div>
        <div id="login"> 로그인</div>
      </L.Brand>
      <L.Enter>
        <div id="email">이메일</div>
        <div id="detail1">이메일을 입력해 주세요</div>
        <div id="line1" />
        <div id="password">비밀번호</div>
        <div id="detail2">비밀번호를 입력해주세요</div>
        <div id="line2" />
        <L.Button onClick={goLS}>
          <div id="detail">로그인</div>
        </L.Button>
        <L.Detail>
          <div id="id">아이디 찾기</div>
          <div id="pw">비밀번호 찾기</div>
          <div id="new">회원가입</div>
        </L.Detail>
      </L.Enter>
      <L.Another>
        <L.Easy>
          <div id="line1" />
          <div id="detail">간편 로그인</div>
          <div id="line2" />
        </L.Easy>
        <L.Google>
          <img
            id="google"
            src={`${process.env.PUBLIC_URL}/photos/google.svg`}
            alt="google"
          />
          <div id="detail">구글로 로그인</div>
        </L.Google>
      </L.Another>
      <L.Hr></L.Hr>
    </L.Container>
  );
};

export default Login;
