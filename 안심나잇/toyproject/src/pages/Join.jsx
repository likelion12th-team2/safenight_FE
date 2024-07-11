import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as J from "../styles/styledJoin";
import axios, { all } from "axios";

const Join = ({ hour, min }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState(""); // 회원 선택 (환자, 간병인, 선택하지 않음)
  const [allow_noti, setAllowNoti] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("username:", username);
    console.log("name:", name);
    console.log("role:", role);
    console.log("allow: ", allow_noti);
    try {
      const response = await axios.post("http://127.0.0.1:8000/user/", {
        username: username,
        email: email,
        name: name,
        password: password,
        role: role,
        allow_noti: allow_noti,
      });
      setMessage("회원가입 성공!");
      navigate("/login/success");
    } catch (error) {
      setMessage("회원가입 실패: " + error.message);
    }
  };

  const handleDivClick = (path) => {
    navigate(path);
  };

  return (
    <J.Container>
      <J.Bar>
        <div id="clock">
          {hour} : {min}
        </div>
        <div id="statusBar">
          <img
            id="connection"
            src={`${process.env.PUBLIC_URL}/photos/Cellular_Connection.svg`}
          />
          <img id="wifi" src={`${process.env.PUBLIC_URL}/photos/WIFI.svg`} />
          <img
            id="battery"
            src={`${process.env.PUBLIC_URL}/photos/Battery.svg`}
          />
        </div>
      </J.Bar>
      <J.Title>
        <div id="backBtn" onClick={() => handleDivClick("/home")}>
          <img src={`${process.env.PUBLIC_URL}/photos/back.svg`} />
        </div>
        <div id="join_title">
          <div id="join_title1">안심나잇</div>
          <div id="join_title2">회원가입</div>
        </div>
      </J.Title>
      <form onSubmit={handleSubmit}>
        <J.Join_email>
          <div id="email">이메일</div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            id="email_text"
            placeholder="이메일을 입력해 주세요"
          />
          <img
            id="check_img"
            src={`${process.env.PUBLIC_URL}/photos/join_purple.svg`}
          />
          <div id="line1"></div>
          <div id="pw">비밀번호</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            id="password_text"
            placeholder="8 ~ 20자 영문 대,소문자,숫자,특수문자 조합"
          />
          <img
            id="check_img"
            src={`${process.env.PUBLIC_URL}/photos/join_gray.svg`}
          />
          <div id="line1"></div>
          <div id="pw">비밀번호 확인</div>
          <input
            type="password"
            id="pw_check"
            placeholder="8 ~ 20자 영문 대,소문자,숫자,특수문자 조합"
          />
          <img
            id="check_img"
            src={`${process.env.PUBLIC_URL}/photos/join_gray.svg`}
          />
          <div id="line1"></div>
          <div id="nickname_input">아이디</div>
          <input
            type="text"
            id="nickname"
            placeholder="아이디를 입력해주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div id="line1"></div>
          <div id="name_input">이름</div>
          <input
            type="text"
            id="name"
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div id="line1"></div>
        </J.Join_email>
        <J.CheckBoxs>
          <J.Member_select>
            <div id="member_select_title">회원선택</div>
            <div id="check1">
              <label class="container" onClick={() => setRole(1)}>
                <input type="checkbox" checked="checked" />
                <div class="checkmark"></div>
              </label>
              <div id="member_text">환자</div>
            </div>
            <div id="check2">
              <label class="container" onClick={() => setRole(2)}>
                <input type="checkbox" checked="checked" />
                <div class="checkmark"></div>
              </label>
              <div id="member_text">간병인</div>
            </div>
            <div id="check3">
              <label class="container" onClick={() => setRole(3)}>
                <input type="checkbox" checked="checked" />
                <div class="checkmark"></div>
              </label>
              <div id="member_text">선택하지 않음</div>
            </div>
          </J.Member_select>

          <J.Alarm>
            <div id="alarm_check">알람 받기(선택)</div>
            <div id="check4">
              <label class="container" onClick={() => setAllowNoti(true)}>
                <input type="checkbox" checked="checked" />
                <div class="checkmark"></div>
              </label>
              <div id="member_text">동의</div>
            </div>
            <div id="check5">
              <label class="container" onClick={() => setAllowNoti(false)}>
                <input type="checkbox" checked="checked" />
                <div class="checkmark"></div>
              </label>
              <div id="member_text">미동의</div>
            </div>
            <div id="caution">동의하시면 카드뉴스 알림이 전송됩니다.</div>
          </J.Alarm>

          <div id="terms_agree">
            <div id="terms_agree_title">약관동의</div>
            <div id="check6">
              <img
                id="terms_check"
                src={`${process.env.PUBLIC_URL}/photos/gray.svg`}
              />
              <div id="member_text">전체 동의합니다</div>
            </div>
            <div id="line2"></div>
            <div id="check7">
              <img
                id="terms_check"
                src={`${process.env.PUBLIC_URL}/photos/gray.svg`}
              />
              <div id="terms_text">이용약관에 동의합니다 (필수)</div>
            </div>
            <div id="check8">
              <img
                id="terms_check"
                src={`${process.env.PUBLIC_URL}/photos/gray.svg`}
              />
              <div id="terms_text">
                개인정보 수집 및 이용에 동의합니다 (필수)
              </div>
            </div>
            <div id="check9">
              <img
                id="terms_check"
                src={`${process.env.PUBLIC_URL}/photos/gray.svg`}
              />
              <div id="member_text">위치정보 수집에 동의합니다 (선택)</div>
            </div>
          </div>
          <div
            id="join_membership"
            // onClick={() => handleDivClick("/login/success")}
          >
            <button id="joinBtn" type="submit">
              안심나잇 회원가입하기
            </button>
          </div>
        </J.CheckBoxs>
        <J.Bottom>
          <div id="bottom_bar"></div>
        </J.Bottom>
      </form>
    </J.Container>
  );
};

export default Join;
