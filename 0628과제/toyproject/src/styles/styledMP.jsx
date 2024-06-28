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

export const Information = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  width: 393px;
  height: 150px;

  #hello {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.55px;
  }
`;

export const Name = styled.div`
  margin-top: 10px;
  width: 96px;
  height: 55px;
  display: flex;
  flex-direction: row;

  #name {
    color: rgba(83, 0, 147, 0.7);
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: -0.5px;
  }

  #sama {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: -0.5px;
  }
`;

export const Email = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: row;

  #me {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
  }

  #email {
    margin-left: 10px;
    margin-top: 16px;
    height: 17.599px;
    flex-shrink: 0;
    color: #686868;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.35px;
  }

  #edit {
    margin-left: 59px;
    margin-top: 18px;
    height: 14.493px;
    flex-shrink: 0;
    color: #686868;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
  }

  #go {
    margin-left: 4px;
    margin-top: 21px;
    width: 7px;
    height: 10.352px;
    flex-shrink: 0;
  }
`;

export const Button = styled.div`
  width: 337px;
  height: 445px;
  margin-top: 28px;
  margin-left: 28px;
`;

export const Medicine = styled.div`
  display: flex;
  flex-direction: row;
  width: 337px;
  height: 73px;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(227, 210, 255, 0.5);
  box-shadow: 0px 4px 4px 0px rgba(135, 62, 255, 0.2);

  #detail {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 110% */
    letter-spacing: -0.2px;
    margin-top: 25.5px;
    margin-left: 22px;
  }

  #go {
    margin-left: 186px;
    margin-top: 26px;
    width: 14px;
    height: 20px;
    flex-shrink: 0;
  }
`;

export const Exercise = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 337px;
  height: 73px;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(227, 210, 255, 0.5);
  box-shadow: 0px 4px 4px 0px rgba(135, 62, 255, 0.2);

  #detail {
    margin-top: 25.5px;
    margin-left: 22px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 110% */
    letter-spacing: -0.2px;
  }

  #go {
    margin-left: 192px;
    margin-top: 26px;
    width: 14px;
    height: 20px;
    flex-shrink: 0;
  }
`;

export const Counseller = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 337px;
  height: 73px;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(227, 210, 255, 0.5);
  box-shadow: 0px 4px 4px 0px rgba(135, 62, 255, 0.2);

  #detail {
    color: #000;
    font-family: "Pretendard Variable";
    margin-top: 25.5px;
    margin-left: 22px;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 110% */
    letter-spacing: -0.2px;
  }

  #go {
    margin-left: 214px;
    margin-top: 26px;
    width: 14px;
    height: 20px;
    flex-shrink: 0;
  }
`;

export const Diary = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 337px;
  height: 73px;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(227, 210, 255, 0.5);
  box-shadow: 0px 4px 4px 0px rgba(135, 62, 255, 0.2);

  #detail {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 110% */
    letter-spacing: -0.2px;
    margin-top: 25.5px;
    margin-left: 22px;
  }

  #go {
    margin-left: 214px;
    margin-top: 26px;
    width: 14px;
    height: 20px;
    flex-shrink: 0;
  }
`;

export const Save = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 337px;
  height: 73px;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(227, 210, 255, 0.5);
  box-shadow: 0px 4px 4px 0px rgba(135, 62, 255, 0.2);

  #detail {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 110% */
    margin-top: 25.5px;
    margin-left: 22px;
    letter-spacing: -0.2px;
  }

  #go {
    margin-left: 232px;
    margin-top: 26px;
    width: 14px;
    height: 20px;
    flex-shrink: 0;
  }
`;

export const Hr = styled.div`
  margin-left: 126.5px;
  margin-top: 63px;
  width: 140px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #000;
`;
