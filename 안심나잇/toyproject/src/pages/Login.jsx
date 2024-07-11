import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as L from "../styles/styledLogin";
import axios from "axios";

const Login = ({ hour, min }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("폼 제출됨");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/rest-auth/login/",
        {
          username: username,
          password: password,
        }
      );
      setMessage("로그인 성공!");
      navigate("/login/success");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage("잘못된 이메일 또는 비밀번호입니다.");
      } else {
        setMessage("로그인 실패: " + error.message);
      }
    }
  };

  const goJoin = () => {
    navigate(`/join`);
  };

  return (
    <L.Container>
      <L.Bar style={{ flexDirection: "row" }}>
        <div id="Time">
          {hour} : {min}
        </div>
        <div id="Connection">
          <img
            src={`${process.env.PUBLIC_URL}/photos/Cellular_Connection.svg`}
            alt="connection"
          />
        </div>
        <div id="Wifi">
          <img src={`${process.env.PUBLIC_URL}/photos/WiFi.svg`} alt="Wifi" />
        </div>
        <div id="Battery">
          <img
            src={`${process.env.PUBLIC_URL}/photos/Battery.svg`}
            alt="Battery"
          />
        </div>
      </L.Bar>
      <L.Back>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/photos/back.svg`}
          alt="backbtn"
        />
      </L.Back>
      <L.Brand>
        <div id="name">안심나잇 </div>
        <div id="login"> 로그인</div>
      </L.Brand>

      <form onSubmit={handleSubmit}>
        <L.Enter>
          <div id="email" place>
            이메일
          </div>
          <input
            id="detail1"
            placeholder="이메일을 입력해 주세요"
            type="id"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>
          <div id="line1" />
          <div id="password">비밀번호</div>
          <input
            id="detail2"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <div id="line2" />
          <L.Button type="submit">
            <div id="detail" type="submit">
              로그인
            </div>
          </L.Button>
          <L.Detail>
            <div id="id">아이디 찾기</div>
            <div id="pw">비밀번호 찾기</div>
            <div id="new" onClick={goJoin}>
              회원가입
            </div>
          </L.Detail>
        </L.Enter>
        <L.Another>
          <L.Easy>
            <div id="line1" />
            <div id="detail">간편 로그인</div>
            <div id="line2" />
          </L.Easy>
          <L.Google>
            <img
              id="google"
              src={`${process.env.PUBLIC_URL}/photos/google.svg`}
              alt="google"
            />
            <div id="detail">구글로 로그인</div>
          </L.Google>
        </L.Another>
        <L.Hr></L.Hr>
      </form>
      {message && <p>{message}</p>}
    </L.Container>
  );
};

export default Login;
