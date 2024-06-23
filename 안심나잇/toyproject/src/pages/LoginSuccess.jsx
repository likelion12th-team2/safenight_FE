import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as LS from "../styles/styledLS";

const LoginSuccess = ({ hour, min }) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/home`);
  };

  return (
    <LS.Container>
      <LS.Bar style={{ flexDirection: "row" }}>
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
      </LS.Bar>
      <LS.X>
        <img
          onClick={goHome}
          id="cancel"
          src={`${process.env.PUBLIC_URL}/photos/x.svg`}
          alt="cancel"
        />
      </LS.X>
      <LS.Success>
        <div id="brand">안심나잇</div>
        <div id="detail">로그인이 완료되었습니다</div>
        <LS.Welcome>
          <div id="name">홍길동</div>
          <div id="welcome">님, 환영합니다!</div>
        </LS.Welcome>
      </LS.Success>
      <LS.Button onClick={goHome}>
        <div id="go">홈으로 바로가기</div>
      </LS.Button>
      <LS.Hr></LS.Hr>
    </LS.Container>
  );
};

export default LoginSuccess;
