import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 393px;
  height: 933px;
  background: #38145d;
  align-items: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  width: 393px;
  height: 44px;
  flex-shrink: 0;
  #Time {
    margin-top: 15px;
    margin-left: 15px;
    float: left;
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 138.889% */
    width: 80px;
  }
  #Connection {
    margin-top: 17px;
    margin-left: 220px;
    width: 16px;
    height: 12.173px;
    flex-shrink: 0;
    color: #fff;
  }
  #Wifi {
    margin-top: 17px;
    margin-left: 15px;
    width: 16px;
    height: 12.173px;
    flex-shrink: 0;
    color: #fff;
  }
  #Battery {
    margin-top: 17px;
    margin-left: 10px;
    margin-right: 8px;
    width: 25px;
    height: 12.173px;
    flex-shrink: 0;
    color: #fff;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 393px;
`;

export const Backbtn = styled.div`
  margin-top: 15px;
  margin-left: 15px;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
`;

export const SearchBar = styled.div`
  margin-left: 25px;
  margin-top: 8px;
  display: flex;
  width: 280px;
  height: 43px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #a065ff;
  box-shadow: 0px 4px 4px 0px rgba(160, 101, 255, 0.1);

  #text {
    width: 230px;
    float: left;
    color: #999;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.35px;
  }

  #search {
    width: 17px;
    height: 18px;
    flex-shrink: 0;
  }
`;

export const MainNews = styled.div`
  margin-top: 40px;
  width: 343px;
  height: 327px;
  flex-shrink: 0;
  border-radius: 25px;
  background: rgba(222, 215, 255, 0.7);

  #newstitle {
    width: 318px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 111.111% */
    letter-spacing: -0.45px;
    margin-left: 15px;
    margin-top: 8px;
  }
`;

export const MiddleNews = styled.div`
  width: 343px;
  height: 192px;
  margin-top: 30px;
`;

export const MiddleTitle = styled.div`
  width: 343px;
  display: flex;
  flex-direction: row;
  #titlebar {
    margin-left: 10px;
    color: #bf98ff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 111.111% */
    letter-spacing: -0.45px;
  }

  #detailtext {
    margin-left: 130px;
    color: #b0b0b0;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
  }
  #plus {
    margin-top: 5px;
    margin-left: 5px;
    width: 6px;
    height: 8px;
    flex-shrink: 0;
    fill: #b0b0b0;
    stroke-width: 1px;
    stroke: #b0b0b0;
  }
`;

export const NewsBar1 = styled.div`
  margin-top: 15px;
  width: 343px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #cebfe8;
  box-shadow: 0px 4px 2px 0px rgba(228, 211, 255, 0.2);
  display: flex;
  flex-direction: row;

  #middletitle {
    margin-top: 13px;
    margin-left: 5px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    letter-spacing: -0.35px;
  }

  #detail {
    margin-top: 15px;
    margin-left: 23px;
    width: 8px;
    height: 12px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #000;
  }
`;

export const NewsBar2 = styled.div`
  margin-top: 8px;
  width: 343px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #cebfe8;
  box-shadow: 0px 4px 2px 0px rgba(228, 211, 255, 0.2);
  display: flex;
  flex-direction: row;

  #middletitle {
    margin-top: 13px;
    margin-left: 5px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    letter-spacing: -0.35px;
  }

  #detail {
    margin-top: 15px;
    margin-left: 128px;
    width: 8px;
    height: 12px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #000;
  }
`;

export const NewsBar3 = styled.div`
  margin-top: 8px;
  width: 343px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #cebfe8;
  box-shadow: 0px 4px 2px 0px rgba(228, 211, 255, 0.2);
  display: flex;
  flex-direction: row;

  #middletitle {
    margin-top: 13px;
    margin-left: 5px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    letter-spacing: -0.35px;
  }

  #detail {
    margin-left: 60px;
    margin-top: 15px;
    width: 8px;
    height: 12px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #000;
  }
`;

export const LastNews = styled.div`
  margin-top: 15px;
  width: 343px;
  height: 189px;
`;

export const LastTitle = styled.div`
  width: 343px;
  display: flex;
  flex-direction: row;
  #titlebar {
    margin-left: 10px;
    color: #bf98ff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 111.111% */
    letter-spacing: -0.45px;
  }

  #detailtext {
    margin-left: 210px;
    color: #b0b0b0;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
  }
  #plus {
    margin-top: 5px;
    margin-left: 5px;
    width: 6px;
    height: 8px;
    flex-shrink: 0;
    fill: #b0b0b0;
    stroke-width: 1px;
    stroke: #b0b0b0;
  }
`;

export const LNews = styled.div`
  width: 343px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
`;

export const LNews1 = styled.div`
  width: 157px;
  height: 157px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #cebfe8;

  #gjgjftjd {
    width: 157px;
    height: 119px;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
    background: url(<path-to-image>) lightgray -7.513px -28.495px / 105.825%
      138.11% no-repeat;
  }

  #detail {
    color: #530093;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 111.111% */
    letter-spacing: -0.45px;
    text-align: center;
  }
`;

export const LNews2 = styled.div`
  margin-left: 30px;
  width: 157px;
  height: 157px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #cebfe8;

  #wlwnakrgk {
    width: 157px;
    height: 119px;
    transform: rotate(0.051deg);
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
    background: url(<path-to-image>) lightgray -7.938px -9.001px / 108.869%
      119.083% no-repeat;
  }

  #detail {
    color: #530093;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 111.111% */
    letter-spacing: -0.45px;
    text-align: center;
  }
`;

export const Hr = styled.div`
  margin-top: 24px;
  width: 140px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #fff;
`;
