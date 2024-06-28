import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  align-items: center;
  margin: 0 auto;
  width: 393px;
  height: 1473px;
  background: #38145d;

  display: flex;
  flex-direction: column;
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
    color: white;
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
export const Header = styled.div`
  display: flex;
  width: 393px;
  height: 60px;
  flex-shrink: 0;
  align-items: center;

  #logo {
    width: 27.855px;
    height: 15.848px;
    padding-left: 25px;
    padding-right: 7.81px;
  }
  #header-title {
    display: flex;
    height: 27.692px;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.625px;

    background-color: #38145d;
    border: none;
  }
  #mypage {
    width: 35px;
    height: 32.308px;
    flex-shrink: 0;
    margin-left: auto;
    padding-right: 27px;
  }
`;

export const Home1Title = styled.div`
display: flex;
flex-direction: column;
width:280px;

  #title1 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 114.286%; /* 114.286% */
    letter-spacing: -0.35px;
  }
  #title2 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 100% */
    letter-spacing: -0.5px;
    padding-bottom: 10px;
  }
  #search {
    display: flex;
    align-items: center;
    width: 280px;
    height: 43px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid #a065ff;
    box-shadow: 0px 4px 4px 0px rgba(160, 101, 255, 0.1);
  }
    #search_text {
        color: #999;
        font-family: "Pretendard Variable";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
        letter-spacing: -0.35px;
        padding-left:18px;
        padding-right:45px;

    }
    #search_img{
        padding-right:22px;
    }
  }
`;
export const Article = styled.div`
  width: 343px;
  height: 327px;
  flex-shrink: 0;
  border-radius: 25px;
  background: #e6d7ff;
  margin-top: 14px;

  #article_preview {
    width: 343px;
    height: 259px;
    flex-shrink: 0;
    border-radius: 25px 25px 0px 0px;
  }
  #article_title {
    color: #530093;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 111.111% */
    letter-spacing: -0.45px;
    padding-top: 12px;
    padding-left: 12px;
  }
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 135px;
  padding-top: 23px;
  gap: 21px;
  #menu1 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 14.65px;
    width: 100px;
    height: 135px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #e6d7ff;
  }
  #menu2 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 14.65px;
    width: 100px;
    height: 135px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #e6d7ff;
  }
  #menu3 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 14.65px;
    width: 100px;
    height: 135px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #e6d7ff;
  }
  #menu_img {
    width: 75px;
    height: 65px;
    flex-shrink: 0;
  }
  #menu_text {
    color: #530093;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 111.111% */
    letter-spacing: -0.45px;
  }
`;

export const Home2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 393px;
  height: 754px;
  flex-shrink: 0;
  border-radius: 30px 30px 0px 0px;
  background: #fff;
  margin-top: 23px;

  #Home2Title {
    display: flex;
    align-items: center;

    width: 393px;
    height: 28px;
    margin-top: 22px;
    margin-bottom: 19px;
    color: #a065ff;

    #title1 {
      color: #a065ff;
      font-family: "Pretendard Variable";
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px; /* 112% */
      letter-spacing: -0.625px;
      margin-left: 25px;
    }
    #drugs {
      width: 28px;
      height: 28px;
      flex-shrink: 0;
      padding-right: 25px;
    }
    #dateBox {
      display: flex;
      align-items: center;
      gap: 3px;
    }
    #date1 {
      color: #727272;
      font-family: "Pretendard Variable";
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 166.667% */
      letter-spacing: -0.3px;
    }
    #right-vector {
      width: 6px;
      height: 10px;
    }
  }

  #check_drugs{

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 343px;
  height: 287px;
  flex-shrink: 0;

  border-radius: 20px;
  border: 0.2px solid #999;
  box-shadow: 0px 4px 4px 0px #b487ff7a;
  }
  #drug{
    display: flex;
    align-items: center;
    border-radius: 10px;
    opacity: 0.6;
  
    width: 300px;
    height: 75px;
    flex-shrink: 0;
    border-radius: 10px;
    opacity: 0.6;
    background: rgba(180, 135, 255, 0.5);
  }
  #drug_text {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    gap: 7px;
  }
  #name {
    color: black;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 142.857%; /* 142.857% */
  }
  #explain {
    color: #727272;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
    letter-spacing: -0.3px;
  }
  #check {
    margin-left: auto;
    padding-right: 23px;
  }
  #home2_title2{
    display: flex;
  align-items: center;

  width: 343px;
  height: 28px;
  margin-top: 21px;
  margin-bottom: 14.55px;
  }
  #title2{
    color: #a065ff;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 112% */
    letter-spacing: -0.625px;
  }
  #todo_list{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 343px;
    height: 287px;
    flex-shrink: 0;
  
    border-radius: 20px;
    border: 0.2px solid #999;
    box-shadow: 0px 4px 4px 0px #b487ff7a;
  }
  #calendar{
    display: flex;
  justify-content: center;
  gap: 10px;
  padding-top: 20px;
  padding-bottom: 21.25px;
  }
  #calendar_box{
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  #day{
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 107.143% */
    letter-spacing: -0.35px;
  }
  #date{
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    border-radius: 10px;
    background: rgba(180, 135, 255, 0.48);
    display: flex;
    align-items: center;
    justify-content: center;
  
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 125% */
    letter-spacing: -0.3px;
  }

  #add{
  display: flex;
  align-items: center;
  margin-right:auto;
  gap:9px;

  width: 78px;
  height: 32.519px;
  flex-shrink: 0;
  border-radius: 100px;
  border: 1px solid #a065ff;
  background-color: #fff;
  margin-left:23.5px
  }
  #add_text{
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px; /* 107.143% */
  letter-spacing: -0.35px;
  padding-left: 17px;
  }
  #list_box {
    display: flex;
    flex-direction: column;
    gap: 8.13px;
    padding-top: 14.23px;
    width:292px;
  }
  #list{
    display: flex;
    gap: 7px;
    height: 35px;
  }
  #list_text{
    display: flex;
    align-items: center;
  
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 107.143% */
    letter-spacing: -0.35px;
  }
  #todo_check{
    width: 34px;
  height: 34.552px;
  flex-shrink: 0;
  }
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
