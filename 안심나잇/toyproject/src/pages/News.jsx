import React from "react";
import { useNavigate } from "react-router-dom";
import * as N from "../styles/styledNews";

const News = ({ hour, min }) => {
  const navigate = useNavigate();

  const goSearch = () => {
    navigate(`/search`);
  };

  const goHome = () => {
    navigate("/home");
  };

  const handleDivClick = (path, external = false) => {
    if (external) {
      window.location.href = path;
    } else {
      navigate(path);
    }
  };

  return (
    <N.Container>
      <N.Bar style={{ flexDirection: "row" }}>
        <div id="Time">
          {hour} : {min}
        </div>
        <div id="Connection">
          <img
            src={`${process.env.PUBLIC_URL}/photos/Cellular_Connectionwhite.svg`}
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
      </N.Bar>
      <N.Search>
        <N.Backbtn>
          <img
            onClick={goHome}
            src={`${process.env.PUBLIC_URL}/photos/Backbtnwhite.svg`}
            alt="backbtn"
          />
        </N.Backbtn>
        <N.SearchBar onClick={goSearch}>
          <div id="text">오늘의 뉴스를 검색해 보세요</div>
          <img
            src={`${process.env.PUBLIC_URL}/photos/search.svg`}
            alt="search"
          />
        </N.SearchBar>
      </N.Search>
      <N.MainNews>
        <img
          onClick={() =>
            handleDivClick(
              "https://www.dementianews.co.kr/news/articleView.html?idxno=7176",
              true
            )
          }
          src={`${process.env.PUBLIC_URL}/photos/mainnews.png`}
          alt="mainnews"
        />
        <div id="newstitle">
          한국인 20%가 보유한 ‘APOE4 동형접합형’과 알츠하이머병 징후
        </div>
      </N.MainNews>
      <N.MiddleNews>
        <N.MiddleTitle>
          <div id="titlebar">통합 뇌질환 뉴스</div>
          <div id="detailtext">전체보기</div>
          <img
            id="plus"
            src={`${process.env.PUBLIC_URL}/photos/newsback.svg`}
            alt="plus"
          />
        </N.MiddleTitle>
        <N.NewsBar1>
          <div
            onClick={() =>
              handleDivClick(
                "http://ibds.or.kr/ibdsweb/page_notice_02.php?bmode=view&bm_id=b02&idx=436&cpage=1&s_field01=&s_txt=",
                true
              )
            }
            id="middletitle"
          >
            치매에 대한 항정신병 약물은 광범위한 건강 위험을...
          </div>
          <img
            id="detail"
            src={`${process.env.PUBLIC_URL}/photos/middlenewsback.svg`}
            alt="detail"
          />
        </N.NewsBar1>
        <N.NewsBar2>
          <div
            onClick={() =>
              handleDivClick(
                "http://ibds.or.kr/ibdsweb/page_notice_02.php?bmode=view&bm_id=b02&idx=434&cpage=1&s_field01=&s_txt=",
                true
              )
            }
            id="middletitle"
          >
            수면 무호흡증은 뇌를 힘들게 한다
          </div>
          <img
            id="detail"
            src={`${process.env.PUBLIC_URL}/photos/middlenewsback.svg`}
            alt="detail"
          />
        </N.NewsBar2>
        <N.NewsBar3>
          <div
            onClick={() =>
              handleDivClick(
                "http://ibds.or.kr/ibdsweb/page_notice_02.php?bmode=view&bm_id=b02&idx=433&cpage=1&s_field01=&s_txt=",
                true
              )
            }
            id="middletitle"
          >
            습관성 카페인 사용은 편두통과 연관성이 없다
          </div>
          <img
            id="detail"
            src={`${process.env.PUBLIC_URL}/photos/middlenewsback.svg`}
            alt="detail"
          />
        </N.NewsBar3>
      </N.MiddleNews>
      <N.LastNews>
        <N.LastTitle>
          <div id="titlebar">뇌졸중</div>
          <div id="detailtext">전체보기</div>
          <img
            id="plus"
            src={`${process.env.PUBLIC_URL}/photos/newsback.svg`}
            alt="plus"
          />
        </N.LastTitle>
        <N.LNews>
          <N.LNews1>
            <img
              onClick={() =>
                handleDivClick(
                  "http://www.samsunghospital.com/home/healthInfo/content/contenView.do?CONT_SRC_ID=09a4727a8000f376&CONT_SRC=CMS&CONT_ID=1787&CONT_CLS_CD=001020001001",
                  true
                )
              }
              id="gjgjftjd"
              src={`${process.env.PUBLIC_URL}/photos/gjguftjd.png`}
              alt="허혈성 뇌졸중"
            />
            <div id="detail">허혈성 뇌졸중</div>
          </N.LNews1>
          <N.LNews2>
            <img
              onClick={() =>
                handleDivClick(
                  "http://www.samsunghospital.com/home/healthInfo/content/contenView.do?CONT_SRC_ID=09a4727a8000f33d&CONT_SRC=CMS&CONT_ID=329&CONT_CLS_CD=001020001001",
                  true
                )
              }
              id="wlwnakrgk"
              src={`${process.env.PUBLIC_URL}/photos/wlwnakrgk.png`}
              alt="지주막하출혈"
            />
            <div id="detail">지주막하출혈</div>
          </N.LNews2>
        </N.LNews>
      </N.LastNews>
      <N.Hr></N.Hr>
    </N.Container>
  );
};

export default News;
