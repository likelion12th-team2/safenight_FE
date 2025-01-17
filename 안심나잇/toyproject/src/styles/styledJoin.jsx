import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  align-items: center;
  margin: 0 auto;
  width: 393px;
  height: 1192px;
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
  #backBtn {
    padding-left: 25px;
    padding-top: 10px;
  }
  #join_title {
    padding-left: 25px;
    display: flex;
    gap: 5px;
  }
  #join_title1 {
    color: #530093;
    font-family: "Pretendard Variable";
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  #join_title2 {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const Join_email = styled.div`
  padding-left: 25px;
  #email {
    margin-top: 43px;
    margin-bottom: 12px;
    color: #000;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  #pw {
    margin-top: 46px;
    margin-bottom: 12px;
    color: #000;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  #nickname_input {
    margin-top: 46px;
    margin-bottom: 12px;
    color: #000;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  #name_input {
    margin-top: 46px;
    margin-bottom: 12px;
    color: #000;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
  }
  #email_text {
    border: none;
    color: #aaa;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 12px;
    width: 315px;
  }
  #password_text {
    border: none;
    color: #aaa;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 12px;
    width: 315px;
  }
  #pw_check {
    border: none;
    color: #aaa;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 12px;
    width: 315px;
  }
  #nickname {
    border: none;
    color: #aaa;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 12px;
    width: 315px;
  }
  #name {
    border: none;
    color: #aaa;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 12px;
    width: 315px;
  }
  #line1 {
    width: 343px;
    height: 1px;
    background: #aaa;
  }
`;

export const Member_select = styled.div`
  padding-top: 4px;
  padding-left: 25px;

  #member_select_title {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-top: 43px;
    padding-bottom: 19px;
  }

  #check1 {
    display: flex;
    padding-top: 10px;
    gap: 19px;
    width: 393px;
  }
  #check2 {
    display: flex;
    padding-top: 10px;
    gap: 19px;
    width: 393px;
  }
  #check3 {
    display: flex;
    padding-top: 10px;
    gap: 19px;
    width: 393px;
  }
`;

export const CheckBoxs = styled.div`
  #check4 {
    display: flex;
    padding-top: 10px;
    gap: 19px;
  }
  #check5 {
    display: flex;
    padding-top: 10px;
    gap: 19px;
  }
  #check6 {
    display: flex;
    padding-top: 10px;
    gap: 19px;
  }
  #terms_agree {
    padding-top: 41px;
    padding-left: 25px;
  }
  #terms_agree_title {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 19px;
  }
  #line2 {
    width: 343.001px;
    height: 1px;
    background: rgba(170, 170, 170, 0.5);
    margin-top: 9px;
  }
  #check7 {
    display: flex;
    padding-top: 10px;
    gap: 19px;
  }
  #check8 {
    display: flex;
    padding-top: 10px;
    gap: 19px;
  }
  #check9 {
    display: flex;
    padding-top: 10px;
    gap: 19px;
  }
  #terms_text {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  #join_membership {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 41px;
  }
  #joinBtn {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 343px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #a065ff;

    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Alarm = styled.div`
  padding-top: 4px;
  padding-left: 25px;
  margin-top: 10px;
  top: 20px;
  position: relative;

  #alarm_check {
    top: 3px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 19px;
  }
  #caution {
    color: #aaa;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 11px;
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
