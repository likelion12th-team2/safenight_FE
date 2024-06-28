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

export const X = styled.div`
  width: 20px;
  height: 20px;
  margin-top: 20px;
  margin-left: 20px;
`;

export const Success = styled.div`
  margin-left: 25px;
  margin-top: 100px;
  width: 293px;
  height: 116px;

  #brand {
    color: #530093;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #detail {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Welcome = styled.div`
  width: 293px;
  height: 116px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  #name {
    color: rgba(83, 0, 147, 0.7);
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #welcome {
    color: rgba(0, 0, 0, 0.7);
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Button = styled.div`
  margin-left: 25px;
  margin-top: 350px;
  width: 343px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #a065ff;

  #go {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.4px;
    position: relative;
    top: 15px;
  }
`;

export const Hr = styled.div`
  width: 140px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #000;
  margin-top: 50px;
  margin-left: 130px;
`;
