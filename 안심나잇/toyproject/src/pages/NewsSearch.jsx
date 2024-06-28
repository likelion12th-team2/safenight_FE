import React from "react";
import { useNavigate } from "react-router-dom";
import * as NS from "../styles/styledNewsSearch";

const NewsSearch = ({ hour, min }) => {
  const navigate = useNavigate();

  const goNews = () => {
    navigate(`/news`);
  };

  return (
    <NS.Container>
      <NS.Bar style={{ flexDirection: "row" }}>
        <div id="Time">
          {hour} : {min}
        </div>
        <div id="Connection">
          <img
            src={`${process.env.PUBLIC_URL}/photos/Cellular Connectionwhite.svg`}
            alt="connection"
          />
        </div>
        <div id="Wifi">
          <img
            src={`${process.env.PUBLIC_URL}/photos/WiFiwhite.svg`}
            alt="Wifi"
          />
        </div>
        <div id="Battery">
          <img
            src={`${process.env.PUBLIC_URL}/photos/Batterywhite.svg`}
            alt="Battery"
          />
        </div>
      </NS.Bar>
      <NS.Search>
        <NS.Backbtn>
          <img
            onClick={goNews}
            src={`${process.env.PUBLIC_URL}/photos/Backbtnwhite.svg`}
            alt="backbtn"
          />
        </NS.Backbtn>
        <NS.SearchBar>
          <div id="text">| 오늘의 뉴스를 검색해 보세요</div>
          <img
            src={`${process.env.PUBLIC_URL}/photos/search.svg`}
            alt="search"
          />
        </NS.SearchBar>
      </NS.Search>
      <NS.Recent>
        <div id="text">최근 검색어</div>
        <NS.KeyWord>
          <NS.KeyWord1>
            <div id="text">초기치매</div>
          </NS.KeyWord1>
          <NS.KeyWord2>
            <div id="text">알츠하이머</div>
          </NS.KeyWord2>
          <NS.KeyWord3>
            <div id="text">알ㅊㅡ</div>
          </NS.KeyWord3>
        </NS.KeyWord>
      </NS.Recent>
      <NS.KeyBoard>
        <img
          id="keyboard"
          src={`${process.env.PUBLIC_URL}/photos/keyboard.png`}
          alt="keyboard"
        />
      </NS.KeyBoard>
    </NS.Container>
  );
};

export default NewsSearch;
