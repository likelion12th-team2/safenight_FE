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

export const Back = styled.div`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  margin-top: 10px;
  margin-left: 25px;
`;

export const Brand = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  margin-left: 25px;

  #name {
    color: #530093;
    font-family: "Pretendard Variable";
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  #login {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Enter = styled.div`
  width: 343px;
  height: 260px;
  margin-left: 25px;
  margin-top: 43px;

  #email {
    color: #000;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #detail1 {
    margin-top: 12px;
    color: #aaa;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #line1 {
    margin-top: 12px;
    width: 343px;
    height: 1px;
    background: #aaa;
  }

  #password {
    margin-top: 45px;
    color: #000;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #detail2 {
    margin-top: 12px;
    color: #aaa;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #line2 {
    margin-top: 12px;
    width: 343px;
    height: 1px;
    background: #aaa;
  }
`;

export const Button = styled.div`
  width: 343px;
  margin-top: 20px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(176, 176, 176, 0.7);

  #detail {
    position: relative;
    top: 17px;
    margin-left: 152px;
    color: #fff;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Detail = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  margin-left: 35px;

  #id {
    color: #727272;
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #pw {
    margin-left: 28px;
    color: #727272;
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #new {
    margin-left: 37px;
    color: #727272;
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Another = styled.div`
  margin-top: 47px;
  margin-left: 25.5px;
  width: 343px;
  height: 79px;
`;

export const Easy = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;

  #line1 {
    margin-top: 7px;
    width: 100px;
    height: 1px;
    background: #aaa;
  }

  #detail {
    margin-left: 12px;
    color: #aaa;
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #line2 {
    margin-top: 7px;
    margin-left: 12px;
    width: 100px;
    height: 1px;
    background: #aaa;
  }
`;

export const Google = styled.div`
  width: 343px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(176, 176, 176, 0.7);
  display: flex;
  flex-direction: row;
  margin-top: 15px;

  #google {
    margin-left: 117px;
    margin-top: 17px;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  #detail {
    margin-top: 16px;
    margin-left: 6px;
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.4px;
  }
`;

export const Hr = styled.div`
  margin-top: 233px;
  margin-left: 126px;
  width: 140px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #000;
`;
