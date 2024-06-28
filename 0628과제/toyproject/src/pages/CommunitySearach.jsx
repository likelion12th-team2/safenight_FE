import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as CS from "../styles/styledCS";

const CommunitySearch = ({ hour, min }) => {
  return (
    <CS.Container>
      <CS.Bar style={{ flexDirection: "row" }}>
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
      </CS.Bar>
      <CS.Background>
        <div id="logo">안심나잇</div>
        <CS.Search>
          <img
            id="searchglass"
            src={`${process.env.PUBLIC_URL}/photos/search.svg`}
            alt="searchglass"
          />
          <div id="detail">관심 있는 글을 검색해 보세요</div>
        </CS.Search>
        <img
          id="mypage"
          src={`${process.env.PUBLIC_URL}/photos/mypage.svg`}
          alt="mypage"
        />
      </CS.Background>
      <CS.Class>
        <div id="home">홈</div>
        <div id="popular">인기</div>
      </CS.Class>
      <CS.Hr>
        <div id="hr1"></div>
      </CS.Hr>
      <CS.Category>
        <CS.Clao>
          <img
            id="icon"
            src={`${process.env.PUBLIC_URL}/photos/clao.png`}
            alt="치매"
          />
          <div id="title">치매게시판</div>
        </CS.Clao>
        <CS.Family>
          <img
            id="icon"
            src={`${process.env.PUBLIC_URL}/photos/rkwhr.png`}
            alt="가족"
          />
          <div id="title">가족게시판</div>
        </CS.Family>
        <CS.Free>
          <img
            id="icon"
            src={`${process.env.PUBLIC_URL}/photos/wkdb.png`}
            alt="자유"
          />
          <div id="title">자유게시판</div>
        </CS.Free>
        <CS.Socio>
          <img
            id="icon"
            src={`${process.env.PUBLIC_URL}/photos/tltk.png`}
            alt="시사"
          />
          <div id="title">시사토크</div>
        </CS.Socio>
      </CS.Category>
      <CS.Hr1></CS.Hr1>
      <CS.Detail>
        <div id="search">최근 검색어</div>
        <CS.Recent>
          <CS.Re1>
            <div id="early">초기치매</div>
          </CS.Re1>
          <CS.Re2>
            <div id="alt">알츠하이머</div>
          </CS.Re2>
          <CS.Re3>
            <div id="miss">알ㅊㅡ</div>
          </CS.Re3>
        </CS.Recent>
      </CS.Detail>
      <CS.Keyboard>
        <img
          id="keyboard"
          src={`${process.env.PUBLIC_URL}/photos/keyboard.png`}
          alt="keyboard"
        />
      </CS.Keyboard>
    </CS.Container>
  );
};

export default CommunitySearch;
