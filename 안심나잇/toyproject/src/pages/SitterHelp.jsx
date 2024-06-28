import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../styles/styledSitterHelp.jsx";

const SitterHelp = ({ hour, min }) => {
  const navigate = useNavigate();
  const handleDivClick = (path) => {
    navigate(path);
  };

  return (
    <S.Container>
      <S.Bar>
        <div id="clock">9:15</div>
        <div id="statusBar">
          <img
            id="connection"
            src={`${process.env.PUBLIC_URL}/photos/Cellular Connection검정.svg`}
          />
          <img
            id="wifi"
            src={`${process.env.PUBLIC_URL}/photos/WIFI검정.svg`}
          />
          <img
            id="battery"
            src={`${process.env.PUBLIC_URL}/photos/Battery검정.svg`}
          />
        </div>
      </S.Bar>
      <S.Title>
        <div id="title" onClick={() => handleDivClick("/home")}>
          안심나잇
        </div>
        <div id="category">
          카테고리{" "}
          <img src={`${process.env.PUBLIC_URL}/photos/아래화살표.svg`} />
        </div>
        <div id="function">
          <img src={`${process.env.PUBLIC_URL}/photos/돋보기.svg`} />
          <img src={`${process.env.PUBLIC_URL}/photos/장바구니.svg`} />
        </div>
      </S.Title>
      <S.Ad>
        지금 바로
        <br />
        뉴스레터를 구독해보세요!
      </S.Ad>

      <S.Guide>
        <div id="guideTitle">치매 환자 가족이 꼭 알아야 하는 것</div>
        <div id="guide_box">
          <div id="guide">
            <img src={`${process.env.PUBLIC_URL}/photos/guide_img1.svg`} />
            치매환자 간병 가이드
          </div>
          <div id="guide">
            <img src={`${process.env.PUBLIC_URL}/photos/guide_img2.svg`} />
            치매를 늦추는 방법
          </div>
        </div>
      </S.Guide>
      <S.Menu>
        <div id="title"> 생활지원</div>
        <div id="servie_menu">
          <div id="frame">
            <div id="menu1_left">긴급 SOS 서비스</div>
            <div id="menu2">긴급 신고, 위치 정보 전달</div>
          </div>
          <div id="frame">
            <div id="menu2">모두가 함께하는 프로그램, 간병 강의 제공</div>
            <div id="menu1_right">간병인 지원 서비스</div>
          </div>
          <div id="frame">
            <div id="menu1_left">가까운 치매 병원</div>
            <div id="menu2">지도 및 교통 정보 지원</div>
          </div>
          <div id="frame">
            <div id="menu2">규칙적인 식사를 위한</div>
            <div id="menu1_right">식사 배달 서비스</div>
          </div>
        </div>
      </S.Menu>
      <S.Bottom>
        <div id="bottom_bar"></div>
      </S.Bottom>
    </S.Container>
  );
};

export default SitterHelp;
