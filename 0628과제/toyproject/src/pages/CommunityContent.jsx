import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as CC from "../styles/styledCC";

const CommunityContent = ({ hour, min }) => {
  const navigate = useNavigate();

  const goCommunity = () => {
    navigate(`/community`);
  };

  const goMyPage = () => {
    navigate("/mypage");
  };

  const goCS = () => {
    navigate("/cs");
  };
  return (
    <CC.Container>
      <CC.Bar style={{ flexDirection: "row" }}>
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
      </CC.Bar>
      <CC.Background>
        <div id="logo">안심나잇</div>
        <CC.Search>
          <img
            id="searchglass"
            src={`${process.env.PUBLIC_URL}/photos/search.svg`}
            alt="searchglass"
          />
          <div id="detail" onClick={goCS}>
            관심 있는 글을 검색해 보세요
          </div>
        </CC.Search>
        <img
          id="mypage"
          onClick={goMyPage}
          src={`${process.env.PUBLIC_URL}/photos/mypage.svg`}
          alt="mypage"
        />
      </CC.Background>
      <CC.Back onClick={goCommunity}>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/photos/backpurple.svg`}
          alt="backbtn"
        />
      </CC.Back>
      <CC.Content>
        <CC.Name>
          <img
            id="me"
            src={`${process.env.PUBLIC_URL}/photos/me.png`}
            alt="me"
          />
          <div id="id">해바라기</div>
          <div id="time">방금 전</div>
        </CC.Name>
        <div id="title">치매 예방 방법 효과있나요</div>
        <div id="con">
          안녕하세요 부모님이 치매 초기라고 판단되어 가입하고 처음 글써봅니다.
          요즘들어 자주 가물가물 하신다고 하셔서 속상하네요. 저는 워킹맘 입니다.
          아이들도 어려서 제가 자주 챙겨드리지 못하네요. 인터넷에 검색하다가 이
          사이트를 알게되었는데 정보도 많고 좋네요... 혹시 치매 예방 방법 좋은것
          있나요. 뇌 주사랑 약물치료를 시도해보려 합니다. 영양제도 사봤는데
          좋은거 있으면 추천좀 부탁드립니다~ 좋아지셨으면 좋겠네요ㅠ
        </div>
        <CC.Save>
          <div id="mine">보관</div>
          <img
            id="heart"
            src={`${process.env.PUBLIC_URL}/photos/heart.svg`}
            alt="heart"
          />
        </CC.Save>
      </CC.Content>
      <CC.Comment>
        <img
          id="alarm"
          src={`${process.env.PUBLIC_URL}/photos/alarm.svg`}
          alt="alarm"
        />
        <div id="comment">댓글</div>
      </CC.Comment>
      <CC.Hr1></CC.Hr1>
      <CC.Com1>
        <CC.M1>
          <img
            id="me"
            src={`${process.env.PUBLIC_URL}/photos/me.png`}
            alt="me"
          />
          <CC.Main1>
            <div id="name">89 바오바오</div>
            <div id="talk">저희 부모님도 처음엔 그랬는데 지금 좋아졌어요~ </div>
            <div id="date">2024.05.09 17:20</div>
          </CC.Main1>
        </CC.M1>
      </CC.Com1>
      <CC.Com2>
        <CC.M2>
          <img
            id="me"
            src={`${process.env.PUBLIC_URL}/photos/me.png`}
            alt="me"
          />
          <CC.Main2>
            <div id="name">아비요</div>
            <div id="talk">힙내십.시요.</div>
            <div id="date">2024.05.09 17:24</div>
          </CC.Main2>
        </CC.M2>
      </CC.Com2>
      <CC.Com3>
        <CC.M3>
          <img
            id="me"
            src={`${process.env.PUBLIC_URL}/photos/me.png`}
            alt="me"
          />
          <CC.Main3>
            <div id="name">김달수용사</div>
            <div id="talk">뇌. 영양제. 좋아요.</div>
            <div id="date">2024.05.09 18:01</div>
          </CC.Main3>
        </CC.M3>
      </CC.Com3>
      <CC.More>
        <div id="see">댓글 더보기</div>
      </CC.More>
      <CC.Metoo>
        <div id="write">나도 댓글 쓰기</div>
      </CC.Metoo>
      <CC.Hr2></CC.Hr2>
    </CC.Container>
  );
};

export default CommunityContent;
