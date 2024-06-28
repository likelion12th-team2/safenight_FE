import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as J from "../styles/styledJoin";

const Join = ({ hour, min }) => {
  const navigate = useNavigate();
  const handleDivClick = (path) => {
    navigate(path);
  };

  return (
    <J.Container>
      <J.Bar>
        <div id="clock">9:15</div>
        <div id="statusBar">
          <img
            id="connection"
            src={`${process.env.PUBLIC_URL}/photos/Cellular Connection검정.svg`}
          />
          <img
            id="wifi"
            src={`${process.env.PUBLIC_URL}/photos/WIFI검정.svg`}
          />
          <img
            id="battery"
            src={`${process.env.PUBLIC_URL}/photos/Battery검정.svg`}
          />
        </div>
      </J.Bar>
      <J.Title>
        <div id="backBtn" onClick={() => handleDivClick("/home")}>
          <img src={`${process.env.PUBLIC_URL}/photos/뒤로가기.svg`} />
        </div>
        <div id="join_title">
          <div id="join_title1">안심나잇</div>
          <div id="join_title2">회원가입</div>
        </div>
      </J.Title>
      <J.Join_email>
        <div id="email">이메일</div>
        <input
          type="text"
          id="email_text"
          placeholder="이메일을 입력해 주세요"
        />
        <img
          id="check_img"
          src={`${process.env.PUBLIC_URL}/photos/join보라체크.svg`}
        />
        <div id="line1"></div>
        <div id="pw">비밀번호</div>
        <input
          type="text"
          id="email_text"
          placeholder="8 ~ 20자 영문 대,소문자,숫자,특수문자 조합"
        />
        <img
          id="check_img"
          src={`${process.env.PUBLIC_URL}/photos/join회색체크.svg`}
        />
        <div id="line1"></div>
        <div id="pw">비밀번호 확인</div>
        <input
          type="text"
          id="email_text"
          placeholder="8 ~ 20자 영문 대,소문자,숫자,특수문자 조합"
        />
        <img
          id="check_img"
          src={`${process.env.PUBLIC_URL}/photos/join회색체크.svg`}
        />
        <div id="line1"></div>
        <div id="name_input">이름</div>
        <input type="text" id="email_text" placeholder="이름을 입력해주세요" />
        <div id="line1"></div>
      </J.Join_email>
      <J.checkBoxs>
        <div id="member_select">
          <div id="member_select_title">회원선택</div>
          <div id="check">
            <img
              id="member_check"
              src={`${process.env.PUBLIC_URL}/photos/gray체크.svg`}
            />
            <div id="member_text">환자</div>
          </div>
          <div id="check">
            <img
              id="member_check"
              src={`${process.env.PUBLIC_URL}/photos/gray체크.svg`}
            />
            <div id="member_text">간병인</div>
          </div>
          <div id="check">
            <img
              id="member_check"
              src={`${process.env.PUBLIC_URL}/photos/gray체크.svg`}
            />
            <div id="member_text">선택하지 않음</div>
          </div>
        </div>

        <div id="alarm">
          <div id="alarm_check">알람 받기(선택)</div>
          <div id="check">
            <img
              id="member_check"
              src={`${process.env.PUBLIC_URL}/photos/gray체크.svg`}
            />
            <div id="member_text">동의</div>
          </div>
          <div id="check">
            <img
              id="member_check"
              src={`${process.env.PUBLIC_URL}/photos/gray체크.svg`}
            />
            <div id="member_text">미동의</div>
          </div>
          <div id="caution">동의하시면 카드뉴스 알림이 전송됩니다.</div>
        </div>

        <div id="terms_agree">
          <div id="terms_agree_title">약관동의</div>
          <div id="check">
            <img
              id="terms_check"
              src={`${process.env.PUBLIC_URL}/photos/gray체크.svg`}
            />
            <div id="member_text">전체 동의합니다</div>
          </div>
          <div id="line2"></div>
          <div id="check1">
            <img
              id="terms_check"
              src={`${process.env.PUBLIC_URL}/photos/gray체크.svg`}
            />
            <div id="terms_text">이용약관에 동의합니다 (필수)</div>
          </div>
          <div id="check1">
            <img
              id="terms_check"
              src={`${process.env.PUBLIC_URL}/photos/gray체크.svg`}
            />
            <div id="terms_text">개인정보 수집 및 이용에 동의합니다 (필수)</div>
          </div>
          <div id="check1">
            <img
              id="terms_check"
              src={`${process.env.PUBLIC_URL}/photos/gray체크.svg`}
            />
            <div id="member_text">위치정보 수집에 동의합니다 (선택)</div>
          </div>
        </div>
        <div
          id="join_membership"
          onClick={() => handleDivClick("/login-success")}
        >
          <div id="joinBtn">안심나잇 회원가입하기</div>
        </div>
      </J.checkBoxs>
      <J.Bottom>
        <div id="bottom_bar"></div>
      </J.Bottom>
    </J.Container>
  );
};

export default Join;
