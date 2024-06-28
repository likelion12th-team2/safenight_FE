import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as C from "../styles/styledCommunity";

const Community = ({ hour, min }) => {
  const navigate = useNavigate();

  const goSearch = () => {
    navigate(`/cs`);
  };

  const goContent = () => {
    navigate("/cc");
  };

  const goWrite = () => {
    navigate("/cw");
  };

  const goMyPage = () => {
    navigate("/mypage");
  };

  return (
    <C.Container>
      <C.Bar style={{ flexDirection: "row" }}>
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
      </C.Bar>
      <C.Background>
        <div id="logo">안심나잇</div>
        <C.Search onClick={goSearch}>
          <img
            id="searchglass"
            src={`${process.env.PUBLIC_URL}/photos/search.svg`}
            alt="searchglass"
          />
          <div id="detail">관심 있는 글을 검색해 보세요</div>
        </C.Search>
        <img
          onClick={goMyPage}
          id="mypage"
          src={`${process.env.PUBLIC_URL}/photos/mypage.svg`}
          alt="mypage"
        />
      </C.Background>
      <C.Class>
        <div id="home">홈</div>
        <div id="popular">인기</div>
      </C.Class>
      <C.Hr>
        <div id="hr1"></div>
      </C.Hr>
      <C.Category>
        <C.Clao>
          <img
            id="icon"
            src={`${process.env.PUBLIC_URL}/photos/clao.png`}
            alt="치매"
          />
          <div id="title">치매게시판</div>
        </C.Clao>
        <C.Family>
          <img
            id="icon"
            src={`${process.env.PUBLIC_URL}/photos/rkwhr.png`}
            alt="가족"
          />
          <div id="title">가족게시판</div>
        </C.Family>
        <C.Free>
          <img
            id="icon"
            src={`${process.env.PUBLIC_URL}/photos/wkdb.png`}
            alt="자유"
          />
          <div id="title">자유게시판</div>
        </C.Free>
        <C.Socio>
          <img
            id="icon"
            src={`${process.env.PUBLIC_URL}/photos/tltk.png`}
            alt="시사"
          />
          <div id="title">시사토크</div>
        </C.Socio>
      </C.Category>
      <C.Ad>
        <div id="title">
          지금 바로 <br />
          뉴스레터를 구독해보세요!
        </div>
        <img
          id="icon"
          src={`${process.env.PUBLIC_URL}/photos/Bad news.png`}
          alt="광고"
        />
      </C.Ad>
      <C.Stand>
        <div id="rlwns">최신순</div>
        <img
          id="down"
          src={`${process.env.PUBLIC_URL}/photos/down.svg`}
          alt="오름차순"
        />
      </C.Stand>
      <C.Writing1 onClick={goContent}>
        <C.Id1>
          <img
            id="photo"
            src={`${process.env.PUBLIC_URL}/photos/me.png`}
            alt="me"
          />
          <div id="name">해바라기</div>
          <div id="time">방금 전</div>
        </C.Id1>
        <div id="title">치매 예방 방법 효과있나요</div>
        <div id="like">좋아요 2개 | 댓글 6개 | 조회 14회</div>
      </C.Writing1>
      <C.Writing2>
        <C.Id2>
          <img
            id="photo"
            src={`${process.env.PUBLIC_URL}/photos/me.png`}
            alt="me"
          />
          <div id="name">여짱</div>
          <div id="time">2분 전</div>
        </C.Id2>
        <div id="title">월요일에 병원갑니다ㅠ</div>
        <div id="like">좋아요 7개 | 댓글 4개 | 조회 20회</div>
      </C.Writing2>
      <C.Writing3>
        <C.Id3>
          <img
            id="photo"
            src={`${process.env.PUBLIC_URL}/photos/me.png`}
            alt="me"
          />
          <div id="name">김수한무두루미</div>
          <div id="time">5분 전</div>
        </C.Id3>
        <div id="title">안녕하세요~^^</div>
        <div id="like">좋아요 2개 | 댓글 1개 | 조회 30회</div>
      </C.Writing3>
      <C.Writing4>
        <C.Id4>
          <img
            id="photo"
            src={`${process.env.PUBLIC_URL}/photos/me.png`}
            alt="me"
          />
          <div id="name">미곡동감동햇반</div>
          <div id="time">8분 전</div>
        </C.Id4>
        <div id="title">수술 3주차 입니다.</div>
        <div id="like">좋아요 2개 | 댓글 6개 | 조회 14회</div>
      </C.Writing4>
      <C.Down>
        <C.Below>
          <div id="page"> &lt; 1/10 &gt;</div>
          <C.Write onClick={goWrite}>
            <div id="new">글쓰기</div>
          </C.Write>
        </C.Below>
        <C.Hr1></C.Hr1>
      </C.Down>
    </C.Container>
  );
};

export default Community;
