import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  align-items: center;
  margin: 0 auto;
  width: 393px;
  height: 816px;
  background: #fff;
`;

export const Bar = styled.div`
  display: flex;
  width: 393px;
  height: 44px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding-top: 10px;

  #clock {
    color: black;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    padding-left: 38px;
  }
  #statusBar {
    margin-left: auto;
  }
  #connection {
    width: 16px;
    height: 12.173px;
    flex-shrink: 0;
    padding-right: 13px;
  }
  #wifi {
    width: 16px;
    height: 12.173px;
    flex-shrink: 0;
    padding-right: 10px;
  }
  #battery {
    width: 25px;
    height: 12.173px;
    flex-shrink: 0;
    padding-right: 27px;
  }
`;

export const Title = styled.div`
  display: flex;
  padding-top: 9px;
  padding-left: 28px;
  align-items: center;

  #title {
    color: #530093;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.5px;
    margin-right: 9px;

    border: none;
    background-color: white;
  }
  #category {
    color: #727272;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
  }
  #function {
    display: flex;
    gap: 7px;
    margin-left: auto;
    margin-right: 36px;
  }
`;

export const Ad = styled.div`
  position: relative;
  align-items: center;
  margin: 0 auto;
  margin-top: 16px;

  display: flex;
  justify-content: center;
  width: 343px;
  height: 57px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #38145d;

  color: #fff;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.857%; /* 142.857% */
  letter-spacing: -0.35px;

  margin-bottom: 26px;
`;

export const Guide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  #guideTitle {
    display: flex;
    flex-direction: column;
    gap: 5px;

    color: #530093;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.5px;

    margin-bottom: 5px;
  }
  #guide_box {
    display: flex;
    gap: 23px;
  }
  #guide {
    display: flex;
    flex-direction: column;
    width: 160px;
    height: 200px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
    gap: 9px;

    color: #000;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.35px;
  }
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 5px;
  margin-top: 19px;

  #title {
    color: #530093;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.5px;
  }
  #service_menu {
    display: flex;
    flex-direction: column;
  }
  #frame {
    display: flex;
    width: 343px;
    height: 60px;
    margin-bottom: 20px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #f5efff;

    filter: drop-shadow(0px 4px 4px rgba(107, 0, 144, 0.2));
  }

  #menu1_left {
    width: 176px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 20px 0px 0px 20px;
    background: var(--Color-2, #b487ff);

    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.45px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  #menu1_right {
    width: 176px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 0px 20px 20px 0px;
    background: var(--Color-2, #b487ff);

    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.45px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  #menu2 {
    width: 167px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #000;
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.325px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;

  #bottom_bar {
    width: 140px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #000;s
  }
`;
