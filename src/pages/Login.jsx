import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { userIdAtom } from "../components/userIdAtom";
import { isLoginAtom } from "../components/isLoginAtom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [isRegistering, setIsRegistering] = useState(false);
  const [userId, setUserId] = useRecoilState(userIdAtom);
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("ユーザーID:", userId);
  }, [userId]);

  useEffect(() => {
    // console.log("ログインフラグ:", isLogin);
  }, [isLogin]);

  const onSubmit = async () => {
    try {
      setIsRegistering(true);

      const res = await axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/login`, {
          email,
          password,
        })
        .then((response) => {
          setUserId(response.data.userId);
          setIsLogin(true);
          console.log("レスポンスの中身", response.data);
          console.log("ユーザーID", response.data.userId);
        })
        .finally(() => {
          navigate("/");
        });
      // window.location.href = "/";
      //.catch(e=>this.setState({error:e.response.data.errors}))
    } catch (e) {
      console.log(e.response.data.errors);
      // TODO: しかるべきエラーメッセージを、APIレスポンスから取り出して設定
      setErrorMessage("エラーが発生しました。時間をおいて再度お試しください。");
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <div className="login">
      <Container maxWidth="sm" sx={{ pt: 5 }}>
        <Stack spacing={3}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>ログイン</h1>
          </div>
          <TextField
            required
            label="mail"
            defaultValue=""
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="password"
            defaultValue=""
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            color="primary"
            type="button"
            variant="contained"
            onClick={onSubmit}
            size="large"
            disabled={isRegistering}
          >
            ログイン
          </Button>
          <Link href={"/register"}>新規登録</Link>
        </Stack>
      </Container>
    </div>
  );
};

export default Login;

if (document.getElementById("Login")) {
  ReactDOM.render(<Login />, document.getElementById("Login"));
}
