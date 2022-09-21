import React from "react";
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [userId, setUserId] = useRecoilState(userIdAtom);
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const [isRegistering, setIsRegistering] = useState(false);

  const onSubmit = async () => {
    try {
      setIsRegistering(true);

      const res = await axios
        .post("http://localhost:81/api/login", {
          email,
          password,
        })
        .then((response) => {
          setUserId(response.userId);
          setIsLogin(true);
        });
      window.location.href = "/";
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
            onClick={() => {
              console.log({ isLogin });
              onSubmit();
            }}
            size="large"
            disabled={isRegistering}
          >
            ログイン
          </Button>
          <Link href={"/register"}>新規登録</Link>
          <Link href={"/reregistration"}>パスワードを忘れた方はこちら</Link>
        </Stack>
      </Container>
    </div>
  );
};

export default Login;

if (document.getElementById("Login")) {
  ReactDOM.render(<Login />, document.getElementById("Login"));
}
