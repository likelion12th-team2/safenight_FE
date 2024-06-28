import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 393px;
  height: 816px;
  align-items: center;
  background: #fff;
  margin: 0 auto;
`;

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  width: 393px;
  height: 44px;
  flex-shrink: 0;
  #Time {
    margin-top: 12px;
    margin-left: 10px;
    float: right;
    position: absolute;
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 138.889% */
  }
  #Connection {
    margin-top: 14px;
    margin-left: 310px;
    width: 16px;
    height: 12.173px;
    flex-shrink: 0;
  }
  #Wifi {
    margin-top: 14px;
    margin-left: 8px;
    width: 16px;
    height: 12.173px;
    flex-shrink: 0;
  }
  #Battery {
    margin-top: 14px;
    margin-left: 8px;
    width: 25px;
    height: 12.173px;
    flex-shrink: 0;
  }
`;

export const Background = styled.div`
  width: 393px;
  height: 40px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  #back {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    margin-left: 20px;
  }

  #my {
    margin-left: 125px;
    width: 33px;
    height: 26px;
    flex-shrink: 0;
    color: #530093;
    font-family: "Pretendard Variable";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #headset {
    margin-left: 86px;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  #setting {
    margin-left: 21px;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

export const Me = styled.div`
  display: flex;
  width: 83px;
  height: 90.403px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 28px;
  margin-left: 150px;
`;

export const Information = styled.div`
  width: 126px;
  height: 37px;
  margin-top: 13px;

  #name {
    width: 60px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.4px;
    margin-left: 170px;
  }

  #email {
    margin-top: 7px;
    width: 126px;
    height: 16.309px;
    flex-shrink: 0;
    color: #686868;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.35px;
    margin-left: 134px;
  }
`;

export const Line = styled.div`
  margin-top: 20px;
  width: 393px;
  height: 3px;
  background: #e6d7ff;
`;

export const Box = styled.div`
  margin-top: 37px;
  margin-left: 35px;
  width: 324px;
  height: 260px;
`;

export const Email = styled.div`
  #title {
    color: #aaa;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.375px;
  }

  #line {
    margin-top: 8px;
    width: 324px;
    height: 1px;
    background: #aaa;
  }
`;

export const D1 = styled.div`
  display: flex;
  flex-direction: row;

  #detail {
    margin-top: 7px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.35px;
  }

  #go {
    margin-top: 13px;
    margin-left: 190px;
    width: 8px;
    height: 11px;
    flex-shrink: 0;
  }
`;

export const Name = styled.div`
  margin-top: 20px;
  #title {
    color: #aaa;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.375px;
  }

  #line {
    margin-top: 8px;
    width: 324px;
    height: 1px;
    background: #aaa;
  }
`;

export const D2 = styled.div`
  display: flex;
  flex-direction: row;

  #detail {
    margin-top: 7px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.35px;
  }

  #go {
    margin-top: 13px;
    margin-left: 267px;
    width: 8px;
    height: 11px;
    flex-shrink: 0;
  }
`;

export const Password = styled.div`
  margin-top: 20px;
  #title {
    color: #aaa;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.375px;
  }

  #line {
    margin-top: 8px;
    width: 324px;
    height: 1px;
    background: #aaa;
  }
`;

export const D3 = styled.div`
  display: flex;
  flex-direction: row;

  #detail {
    margin-top: 7px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.35px;
  }

  #go {
    margin-left: 213px;
    margin-top: 13px;
    width: 8px;
    height: 11px;
    flex-shrink: 0;
  }
`;

export const Birthday = styled.div`
  margin-top: 20px;
  #title {
    color: #aaa;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.375px;
  }

  #line {
    margin-top: 8px;
    width: 324px;
    height: 1px;
    background: #aaa;
  }
`;

export const D4 = styled.div`
  display: flex;
  flex-direction: row;

  #detail {
    margin-top: 7px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.35px;
  }

  #go {
    margin-left: 244px;
    margin-top: 13px;
    width: 8px;
    height: 11px;
    flex-shrink: 0;
  }
`;

export const Hr = styled.div`
  width: 140px;
  margin-top: 223px;
  margin-left: 126px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #000;
`;
