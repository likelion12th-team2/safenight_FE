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
  height: 44px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 20px;

  #logo {
    margin-top: 3px;
    color: #530093;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.5px;
  }

  #mypage {
    margin-top: 2px;
    margin-left: 8px;
    width: 35px;
    height: 32.308px;
    flex-shrink: 0;
  }
`;

export const Search = styled.div`
  width: 218px;
  height: 37.941px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #a065ff;
  box-shadow: 0px 4px 4px 0px rgba(160, 101, 255, 0.1);
  margin-left: 8px;
  display: flex;
  flex-direction: row;

  #searchglass {
    margin-top: 12px;
    margin-left: 8px;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }

  #detail {
    margin-top: 9px;
    margin-left: 5px;
    width: 143px;
    color: #999;
    font-family: "Pretendard Variable";
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
    letter-spacing: -0.3px;
  }
`;

export const Back = styled.div`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  margin-left: 20px;
  margin-top: 10px;
`;

export const Content = styled.div`
  width: 392.003px;
  height: 320px;
  flex-shrink: 0;
  border-bottom: 6px solid #d9d9d9;
  background: #fff;

  #title {
    display: flex;
    margin-left: 20px;
    height: 18.261px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 120% */
    letter-spacing: -0.375px;
  }

  #con {
    margin-top: 10px;
    margin-left: 20px;
    width: 334.15px;
    height: 170px;
    flex-shrink: 0;
    color: #000;
    font-family: "Noto Sans KR";
    font-size: 13px;
    font-style: normal;
    font-weight: 350;
    line-height: 20px; /* 153.846% */
  }
`;

export const Name = styled.div`
  width: 392px;
  height: 60px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;

  #me {
    margin-left: 20px;
    width: 40.103px;
    height: 40.58px;
    flex-shrink: 0;
  }

  #id {
    display: flex;
    height: 18.261px;
    margin-top: 10px;
    margin-left: 7px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #a065ff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 112.5% */
    letter-spacing: -0.4px;
  }

  #time {
    margin-top: 10px;
    margin-left: 175px;
    display: flex;
    height: 14.203px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #727272;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
  }
`;

export const Save = styled.div`
  margin-left: 300px;
  width: 50px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(180, 135, 255, 0.48);
  display: flex;
  flex-direction: row;

  #mine {
    margin-left: 8px;
    margin-top: 1px;
    color: #530093;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px; /* 125% */
    letter-spacing: -0.3px;
  }

  #heart {
    margin-left: 3px;
    margin-top: 4px;
    width: 10px;
    height: 9.167px;
    flex-shrink: 0;
    // fill: var(--, #530093);
  }
`;

export const Comment = styled.div`
  width: 392px;
  height: 50px;
  display: flex;
  flex-direction: row;

  #alarm {
    margin-left: 10px;
    margin-top: 14px;
    height: 20px;
    flex-shrink: 0;
  }

  #comment {
    margin-left: 8px;
    margin-top: 15px;
    width: 29.924px;
    height: 18px;
    flex-shrink: 0;
    color: #000;
    text-align: center;
    font-family: "Noto Sans KR";
    font-size: 13px;
    font-style: normal;
    font-weight: 350;
    line-height: 15px; /* 115.385% */
  }
`;

export const Hr1 = styled.div`
  width: 392.003px;
  height: 1px;
  background: #aaa;
`;

export const Com1 = styled.div`
  width: 392.003px;
  height: 73px;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(170, 170, 170, 0.5);
`;

export const M1 = styled.div`
  width: 392px;
  height: 73px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;

  #me {
    margin-top: 10px;
    width: 34.911px;
    height: 35px;
    flex-shrink: 0;
  }
`;

export const Main1 = styled.div`
  height: 60px;
  width: 350px;
  flex-shrink: 0;
  //   display: flex;
  //   flex-direction: column;

  #name {
    margin-left: 4px;
    margin-top: 10px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 114.286% */
    letter-spacing: -0.35px;
  }

  #talk {
    margin-left: 4px;
    margin-top: 5px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: 15px; /* 115.385% */
    letter-spacing: -0.325px;
  }

  #date {
    margin-left: 4px;
    margin-top: 10px;
    color: #aaa;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.25px;
  }
`;

export const Com2 = styled.div`
  width: 392.003px;
  height: 73px;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(170, 170, 170, 0.5);
`;

export const M2 = styled.div`
  width: 392px;
  height: 73px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;

  #me {
    margin-top: 10px;
    width: 34.911px;
    height: 35px;
    flex-shrink: 0;
  }
`;

export const Main2 = styled.div`
  height: 60px;
  width: 350px;
  flex-shrink: 0;
  //   display: flex;
  //   flex-direction: column;

  #name {
    margin-left: 4px;
    margin-top: 10px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 114.286% */
    letter-spacing: -0.35px;
  }

  #talk {
    margin-left: 4px;
    margin-top: 5px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: 15px; /* 115.385% */
    letter-spacing: -0.325px;
  }

  #date {
    margin-left: 4px;
    margin-top: 10px;
    color: #aaa;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.25px;
  }
`;

export const Com3 = styled.div`
  width: 392.003px;
  height: 73px;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(170, 170, 170, 0.5);
`;

export const M3 = styled.div`
  width: 392px;
  height: 73px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;

  #me {
    margin-top: 10px;
    width: 34.911px;
    height: 35px;
    flex-shrink: 0;
  }
`;

export const Main3 = styled.div`
  height: 60px;
  width: 350px;
  flex-shrink: 0;
  //   display: flex;
  //   flex-direction: column;

  #name {
    margin-left: 4px;
    margin-top: 10px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 114.286% */
    letter-spacing: -0.35px;
  }

  #talk {
    margin-left: 4px;
    margin-top: 5px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: 15px; /* 115.385% */
    letter-spacing: -0.325px;
  }

  #date {
    margin-left: 4px;
    margin-top: 10px;
    color: #aaa;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.25px;
  }
`;

export const More = styled.div`
  width: 81px;
  height: 27px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #a065ff;
  margin-left: 150px;
  margin-top: 10px;

  #see {
    display: flex;
    margin-top: 6px;
    height: 15.886px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #a065ff;
    text-align: center;
    font-family: "Noto Sans KR";
    font-size: 12px;
    font-style: normal;
    font-weight: 350;
    line-height: 14px; /* 116.667% */
  }
`;

export const Metoo = styled.div`
  width: 363px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  margin-left: 11px;
  margin-top: 10px;

  #write {
    margin-top: 14px;
    margin-left: 20px;
    color: #aaa;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: 16px; /* 123.077% */
    letter-spacing: -0.325px;
  }
`;

export const Hr2 = styled.div`
  width: 140px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #000;
  margin-top: 30px;
  margin-left: 120px;
`;
