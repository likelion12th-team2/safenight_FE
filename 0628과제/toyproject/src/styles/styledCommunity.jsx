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

export const Class = styled.div`
  width: 393px;
  height: 43px;
  flex-shrink: 0;
  background: #fff;
  display: flex;
  flex-direction: row;
  margin-top: 4px;

  #home {
    margin-top: 18px;
    margin-left: 100px;
    color: #530093;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.45px;
  }

  #popular {
    margin-left: 160px;
    margin-top: 18px;
    color: #530093;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.45px;
  }
`;

export const Hr = styled.div`
  width: 393px;
  height: 5px;
  background: #efe5ff;
  margin-top: 18px;

  #hr1 {
    width: 200px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 5px;
    background: var(--Color-1, #a065ff);
  }
`;

export const Category = styled.div`
  width: 393px;
  height: 52px;
  flex-shrink: 0;
  background: #fff;
  display: flex;
  margin-top: 15px;
  flex-direction: row;
`;

export const Clao = styled.div`
  margin-left: 6px;
  width: 92.602px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #e5d6ff;
  display: flex;
  flex-direction: row;

  #icon {
    margin-top: 4px;
    margin-left: 6px;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  #title {
    margin-top: 5px;
    color: #530093;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px; /* 115.385% */
    letter-spacing: -0.325px;
  }
`;

export const Family = styled.div`
  margin-left: 5px;
  width: 92.602px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #e5d6ff;
  display: flex;
  flex-direction: row;

  #icon {
    margin-top: 4px;
    margin-left: 6px;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  #title {
    margin-top: 5px;
    color: #530093;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px; /* 115.385% */
    letter-spacing: -0.325px;
  }
`;

export const Free = styled.div`
  margin-left: 5px;
  width: 94.511px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #b487ff;
  display: flex;
  flex-direction: row;

  #icon {
    margin-top: 4px;
    margin-left: 6px;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  #title {
    margin-top: 5px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px; /* 115.385% */
    letter-spacing: -0.325px;
  }
`;

export const Socio = styled.div`
  margin-left: 5px;
  width: 82.101px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #e5d6ff;
  display: flex;
  flex-direction: row;

  #icon {
    margin-top: 4px;
    margin-left: 6px;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  #title {
    margin-top: 5px;
    color: #530093;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px; /* 115.385% */
    letter-spacing: -0.325px;
  }
`;

export const Ad = styled.div`
  width: 393px;
  height: 57px;
  flex-shrink: 0;
  background: #38145d;
  display: flex;
  flex-direction: row;

  #title {
    margin-left: 100px;
    margin-top: 10px;
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.35px;
    width: 166px;
  }

  #icon {
    margin-top: 3px;
    width: 78.494px;
    height: 53.434px;
    flex-shrink: 0;
  }
`;

export const Stand = styled.div`
  width: 393px;
  height: 26px;
  flex-shrink: 0;
  background: #f6f0ff;
  display: flex;
  flex-direction: row;

  #rlwns {
    margin-top: 4px;
    margin-left: 25px;
    color: #727272;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
  }

  #down {
    margin-top: 10px;
    margin-left: 5px;
    width: 8px;
    height: 8px;
    flex-shrink: 0;
  }
`;

export const Writing1 = styled.div`
  width: 393px;
  height: 120px;
  flex-shrink: 0;
  border-bottom: 0.5px solid #aaa;
  background: #fff;

  #title {
    margin-top: 15px;
    margin-left: 20px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 120% */
    letter-spacing: -0.375px;
  }

  #like {
    margin-top: 15px;
    margin-left: 20px;
    color: #999;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 150% */
    letter-spacing: -0.3px;
  }
`;

export const Id1 = styled.div`
  margin-top: 10px;
  width: 393px;
  height: 42px;
  display: flex;
  flex-direction: row;

  #photo {
    margin-left: 20px;
    width: 40.205px;
    height: 40px;
    flex-shrink: 0;
  }

  #name {
    margin-top: 10px;
    margin-left: 7px;
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
    margin-left: 200px;
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

export const Writing2 = styled.div`
  width: 393px;
  height: 120px;
  flex-shrink: 0;
  border-bottom: 0.5px solid #aaa;
  background: #fff;

  #title {
    margin-top: 15px;
    margin-left: 20px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 120% */
    letter-spacing: -0.375px;
  }

  #like {
    margin-top: 15px;
    margin-left: 20px;
    color: #999;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 150% */
    letter-spacing: -0.3px;
  }
`;

export const Id2 = styled.div`
  margin-top: 10px;
  width: 393px;
  height: 42px;
  display: flex;
  flex-direction: row;

  #photo {
    margin-left: 20px;
    width: 40.205px;
    height: 40px;
    flex-shrink: 0;
  }

  #name {
    margin-top: 10px;
    margin-left: 7px;
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
    margin-left: 234px;
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

export const Writing3 = styled.div`
  width: 393px;
  height: 120px;
  flex-shrink: 0;
  border-bottom: 0.5px solid #aaa;
  background: #fff;

  #title {
    margin-top: 15px;
    margin-left: 20px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 120% */
    letter-spacing: -0.375px;
  }

  #like {
    margin-top: 15px;
    margin-left: 20px;
    color: #999;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 150% */
    letter-spacing: -0.3px;
  }
`;

export const Id3 = styled.div`
  margin-top: 10px;
  width: 393px;
  height: 42px;
  display: flex;
  flex-direction: row;

  #photo {
    margin-left: 20px;
    width: 40.205px;
    height: 40px;
    flex-shrink: 0;
  }

  #name {
    margin-top: 10px;
    margin-left: 7px;
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
    margin-left: 158px;
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

export const Writing4 = styled.div`
  width: 393px;
  height: 120px;
  flex-shrink: 0;
  border-bottom: 1px solid #aaa;
  background: #fff;

  #title {
    margin-top: 15px;
    margin-left: 20px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 120% */
    letter-spacing: -0.375px;
  }

  #like {
    margin-top: 15px;
    margin-left: 20px;
    color: #999;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 150% */
    letter-spacing: -0.3px;
  }
`;

export const Id4 = styled.div`
  margin-top: 10px;
  width: 393px;
  height: 42px;
  display: flex;
  flex-direction: row;

  #photo {
    margin-left: 20px;
    width: 40.205px;
    height: 40px;
    flex-shrink: 0;
  }

  #name {
    margin-top: 10px;
    margin-left: 7px;
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
    margin-left: 160px;
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

export const Down = styled.div`
  width: 393px;
  height: 76px;
  flex-shrink: 0;
  border-top: 1px solid #aaa;
  background: #fff;
`;

export const Below = styled.div`
  width: 393px;
  height: 40px;
  display: flex;
  flex-direction: row;

  #page {
    margin-top: 20px;
    margin-left: 160px;
    color: rgba(0, 0, 0, 0.3);
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Write = styled.div`
  display: flex;
  width: 48px;
  height: 25px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #b487ff;
  margin-left: 70px;
  margin-top: 10px;

  #new {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.35px;
  }
`;

export const Hr1 = styled.div`
  width: 140px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #000;
  margin-top: 30px;
  margin-left: 120px;
`;
