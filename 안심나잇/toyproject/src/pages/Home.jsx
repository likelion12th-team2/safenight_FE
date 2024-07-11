import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as H from "../styles/styledHome";

const Home = ({ hour, min }) => {
  const navigate = useNavigate();

  const [postList, setPostList] = useState([]);

  const handleDivClick = (path, external = false) => {
    if (external) {
      window.location.href = path;
    } else {
      navigate(path);
    }
  };

  const goCommunity = () => {
    navigate(`/community`);
  };

  const goDiary = () => {
    navigate(`/diary/9`);
  };

  return (
    <H.Container>
      <H.Bar>
        <div id="clock">9:15</div>
        <div id="statusBar">
          <img
            id="connection"
            src={`${process.env.PUBLIC_URL}/photos/images/Cellular_ConnectionWhite.svg`}
          />
          <img
            id="wifi"
            src={`${process.env.PUBLIC_URL}/photos/images/WiFi_white.svg`}
          />
          <img
            id="battery"
            src={`${process.env.PUBLIC_URL}/photos/images/BatteryWhite.svg`}
          />
        </div>
      </H.Bar>
      <H.Header>
        <div id="logo">
          <img src={`${process.env.PUBLIC_URL}/photos/images/logo.svg`} />
        </div>
        <div id="header-title">안심나잇</div>

        <div id="mypage" onClick={() => handleDivClick("/mypage")}>
          <img src={`${process.env.PUBLIC_URL}/photos/images/Group9.svg`} />
        </div>
      </H.Header>
      <H.Home1Title>
        <div id="title1">낮에도 밤에도</div>
        <div id="title2">언제나 안심할 수 있게</div>
        <div id="search" onClick={() => handleDivClick("/search")}>
          <div id="search_text">오늘의 뉴스를 검색해 보세요</div>
          <img
            id="search_img"
            src={`${process.env.PUBLIC_URL}/photos/search_home.svg`}
          />
        </div>
      </H.Home1Title>
      <H.Article>
        <div
          id="article_preview"
          onClick={() =>
            handleDivClick(
              "https://www.dementianews.co.kr/news/articleView.html?idxno=7176",
              true
            )
          }
        >
          <img src={`${process.env.PUBLIC_URL}/photos/images/news.svg`} />
        </div>
        <div id="article_title">
          한국인 20%가 보유한 ‘APOE4 동형접합형’과 알츠하이머병 징후
        </div>
      </H.Article>
      <H.Menu>
        <div id="menu1" onClick={goDiary}>
          <img
            id="menu_img"
            src={`${process.env.PUBLIC_URL}/photos/images/advice.svg`}
          />
          <div id="menu_text">상담기록</div>
        </div>
        <div id="menu2" onClick={() => handleDivClick("/sitterhelp")}>
          <img
            id="menu_img"
            src={`${process.env.PUBLIC_URL}/photos/images/help.svg`}
          />
          <div id="menu_text">간병인지원</div>
        </div>
        <div id="menu3" onClick={goCommunity}>
          <img
            id="menu_img"
            src={`${process.env.PUBLIC_URL}/photos/images/community.svg`}
          />
          <div id="menu_text">커뮤니티</div>
        </div>
      </H.Menu>
      <H.Home2>
        <div id="Home2Title">
          <div id="title1">잊지말고 챙겨드세요</div>
          <img
            id="drugs"
            src={`${process.env.PUBLIC_URL}/photos/images/drugs1.svg`}
          />
          <div id="dateBox">
            <div id="date1">05/09 (목)</div>
            <img
              id="right_vector"
              src={`${process.env.PUBLIC_URL}/photos/images/right_arrow.svg`}
            />
          </div>
        </div>

        <div id="check_drugs">
          <div id="drug">
            <div id="drug_text">
              <div id="name">갈란타민 (Galantamine)</div>
              <div id="explain">1정</div>
            </div>
            <img
              id="check"
              src={`${process.env.PUBLIC_URL}/photos/images/grayCheck_home.svg`}
            />
          </div>
          <div id="drug">
            <div id="drug_text">
              <div id="name">리바스티그민 (Rivastigmine)</div>
              <div id="explain">부착 패치</div>
            </div>
            <img
              id="check"
              src={`${process.env.PUBLIC_URL}/photos/images/grayCheck_home.svg`}
            />
          </div>
          <div id="drug">
            <div id="drug_text">
              <div id="name">도네페질 (Do nepezil)</div>
              <div id="explain">자기 전</div>
            </div>
            <img
              id="check"
              src={`${process.env.PUBLIC_URL}/photos/images/grayCheck_home.svg`}
            />
          </div>
        </div>

        <div id="home2_title2">
          <div id="title2">오늘 할 일을 정리했어요</div>
          <img src={`${process.env.PUBLIC_URL}/photos/images/list.svg`} />
        </div>

        <div id="todo_list">
          <div id="calendar">
            <div id="calendar_box">
              <div id="day">월 </div>
              <div id="date">6</div>
            </div>
            <div id="calendar_box">
              <div id="day">화</div>
              <div id="date">7</div>
            </div>
            <div id="calendar_box">
              <div id="day">수</div>
              <div id="date">8</div>
            </div>
            <div id="calendar_box">
              <div id="day">목</div>
              <div id="date">9</div>
            </div>
            <div id="calendar_box">
              <div id="day">금</div>
              <div id="date">10</div>
            </div>
            <div id="calendar_box">
              <div id="day">토</div>
              <div id="date">11</div>
            </div>
            <div id="calendar_box">
              <div id="day">일</div>
              <div id="date">12</div>
            </div>
          </div>

          <div id="add">
            <div id="add_text">운동</div>
            <img
              id="add_img"
              src={`${process.env.PUBLIC_URL}/photos/images/add.svg`}
            />
          </div>

          <div id="list_box">
            <div id="list">
              <img
                id="todo_check"
                src={`${process.env.PUBLIC_URL}/photos/images/grayTodo.svg`}
              />
              <div id="list_text">손잡고 얘기하며 걷기 15분 (유산소운동)</div>
            </div>
            <div id="list">
              <img
                id="todo_check"
                src={`${process.env.PUBLIC_URL}/photos/images/grayTodo.svg`}
              />
              <div id="list_text">
                의자에서 앉았다 일어서기 10분 (하지 근력운동)
              </div>
            </div>
            <div id="list">
              <img
                id="todo_check"
                src={`${process.env.PUBLIC_URL}/photos/images/grayTodo.svg`}
              />
              <div id="list_text">스트레칭</div>
            </div>
          </div>
        </div>
        <H.Bottom>
          <div id="bottom_bar"></div>
        </H.Bottom>
      </H.Home2>
    </H.Container>
  );
};
// 뭐요
export default Home;
