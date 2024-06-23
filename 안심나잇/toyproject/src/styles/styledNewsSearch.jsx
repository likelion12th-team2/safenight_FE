import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 393px;
  background: #38145d;
  align-items: center;
  margin: 0 auto;
  height: 816px;
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

export const Recent = styled.div`
  margin-top: 40px;
  width: 213px;
  height: 55px;
  margin-left: 30px;
  #text {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 111.111% */
    letter-spacing: -0.45px;
  }
`;

export const KeyWord = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const KeyWord1 = styled.div`
  width: 61px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);

  #text {
    margin-top: 4px;
    margin-left: 4px;
    width: 47.929px;
    color: #530093;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px; /* 115.385% */
    letter-spacing: -0.325px;
  }
`;

export const KeyWord2 = styled.div`
  width: 77px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  margin-left: 8px;

  #text {
    margin-top: 4px;
    margin-left: 6px;
    width: 60px;
    color: #530093;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px; /* 115.385% */
    letter-spacing: -0.325px;
  }
`;

export const KeyWord3 = styled.div`
  width: 57px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  margin-left: 8px;

  #text {
    margin-top: 4px;
    margin-left: 4px;
    width: 47.929px;
    color: #530093;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px; /* 115.385% */
    letter-spacing: -0.325px;
  }
`;

export const KeyBoard = styled.div`
  margin-top: 380px;
  width: 393px;
  height: 262px;
`;
