import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as CW from "../styles/styledCW";

const CommunityWrite = ({ hour, min }) => {
  const navigate = useNavigate();

  const goCommunity = () => {
    navigate(`/community`);
  };

  return (
    <CW.Container>
      <CW.Bar style={{ flexDirection: "row" }}>
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
      </CW.Bar>
      <CW.Background>
        <div id="brand">안심나잇</div>
        <img
          id="logo"
          src={`${process.env.PUBLIC_URL}/photos/logo.svg`}
          alt="logo"
        />
      </CW.Background>
      <CW.Button>
        <img
          onClick={goCommunity}
          id="back"
          src={`${process.env.PUBLIC_URL}/photos/backpurple.svg`}
          alt="backbtn"
        />
        <CW.Upload>
          <div id="go">등록</div>
        </CW.Upload>
      </CW.Button>
      <CW.Main>
        <CW.Title>
          <div id="detail">제목을 입력해 주세요.</div>
        </CW.Title>
        <CW.Content>
          <div id="detail">내용을 입력하세요.</div>
        </CW.Content>
        <CW.Tag>
          <div id="detail">#태그를 입력해 주세요.(최대 10개)</div>
        </CW.Tag>
      </CW.Main>
      <CW.Keyboard>
        <img
          src={`${process.env.PUBLIC_URL}/photos/keyboard.png`}
          alt="keyboard"
        />
      </CW.Keyboard>
    </CW.Container>
  );
};

export default CommunityWrite;
