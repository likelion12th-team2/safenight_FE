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
  height: 45px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  margin-top: 15px;

  #brand {
    color: #530093;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.5px;
    margin-left: 20px;
  }

  #logo {
    margin-top: 5px;
    width: 27.855px;
    height: 15.848px;
    flex-shrink: 0;
    margin-left: 3px;
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  width: 393px;
  height: 45px;
  flex-shrink: 0;
  margin-top: 10px;

  #back {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    margin-left: 20px;
    margin-top: 3px;
  }
`;

export const Upload = styled.div`
  display: flex;
  width: 46px;
  height: 20px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #b487ff;
  margin-left: 250px;

  #go {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.35px;
  }
`;

export const Main = styled.div`
  width: 343px;
  height: 370px;
  flex-shrink: 0;
`;

export const Title = styled.div`
  margin-top: 5px;
  margin-left: 20px;
  width: 343px;
  height: 41px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(227, 210, 255, 0.3);

  #detail {
    height: 20px;
    top: 10px;
    position: relative;
    margin-top: 10px;
    margin-left: 15px;
    color: #aaa;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.375px;
  }
`;

export const Content = styled.div`
  margin-top: 8px;
  margin-left: 20px;
  width: 343px;
  height: 265px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(227, 210, 255, 0.3);

  #detail {
    top: 10px;
    position: relative;
    margin-left: 15px;
    color: #aaa;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.35px;
  }
`;

export const Tag = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  width: 343px;
  height: 41px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(227, 210, 255, 0.2);

  #detail {
    margin-left: 15px;
    top: 10px;
    position: relative;
    color: #aaa;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.35px;
  }
`;

export const Keyboard = styled.div`
  margin-top: 25px;
  width: 393px;
  height: 262px;
  flex-shrink: 0;
`;
