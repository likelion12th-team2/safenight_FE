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
  display: flex;
  flex-direction: row;
  position: relative;
  width: 393px;
  height: 70px;
  flex-shrink: 0;
`;

export const hr = styled.div`
  width: 393px;
  height: 6px;
  flex-shrink: 0;
  background: #e6d7ff;
`;

export const Backbtn = styled.div`
  margin-top: 15px;
  margin-left: 15px;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
`;

export const Title = styled.div`
  margin-top: 15px;
  margin-left: 105px;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.5px;
`;

export const Date = styled.div`
  margin-top: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const Before = styled.div`
  margin-left: 50px;
  width: 11px;
  height: 18.151px;
  flex-shrink: 0;
  stroke-width: 2px;
  stroke: var(--Color-1, #a065ff);
`;

export const Month = styled.div`
  margin-left: 120px;
  display: flex;
  width: 30px;
  height: 24.958px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--Color-1, #a065ff);
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 122.222% */
`;

export const After = styled.div`
  margin-left: 120px;
  width: 11px;
  height: 18.151px;
  flex-shrink: 0;
  stroke-width: 2px;
  stroke: var(--Color-1, #a065ff);
`;

export const Day = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: row;
  margin-left: 55px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 107.143% */
  letter-spacing: -0.35px;

  #tuesday {
    margin-left: 30px;
  }
  #wednesday {
    margin-left: 30px;
  }
  #thursday {
    margin-left: 30px;
  }
  #friday {
    margin-left: 30px;
  }
  #saturday {
    margin-left: 30px;
  }
  #sunday {
    margin-left: 30px;
  }
`;

export const Number = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 35px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 125% */
  letter-spacing: -0.3px;

  #number {
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--Color-3, rgba(180, 135, 255, 0.48));
    text-align: center;
    margin-left: 10px;
    line-height: 30px;

    &.active {
      background: var(--Color-1, #a065ff);
    }
  }
`;

export const Content = styled.div`
  margin-top: 50px;
  width: 343px;
  height: 527px;
  flex-shrink: 0;
  border-radius: 20px 19px 0px 0px;
  background: #d1b5ff;
  margin-left: 25px;
`;

export const ConTitle = styled.div`
  display: flex;
  flex-direction: row;
  #date {
    margin-left: 30px;
    margin-top: 20px;
    display: flex;
    width: 107px;
    height: 35.016px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 137.5% */
  }
  #doctor {
    display: flex;
    margin-left: 80px;
    margin-top: 20px;
    width: 120px;
    height: 35.016px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  }
`;

export const Counseller = styled.div`
  margin-top: 40px;
  margin-left: 25px;
  width: 298px;
  height: 321.044px;
  flex-shrink: 0;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
`;

export const Newbtn = styled.div`
  width: 79px;
  height: 37.464px;
  flex-shrink: 0;
  border-radius: 30px;
  background: var(--Color-1, #a065ff);
  margin-left: 132px;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
`;

export const hr1 = styled.div`
  margin-left: 101.5px;
  margin-top: 20px;
  width: 140px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #000;
`;
