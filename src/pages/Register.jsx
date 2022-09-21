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

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const onSubmit = async () => {
    try {
      setIsRegistering(true);
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/register`, {
        email,
        password,
      });
      window.location.href = "/login";
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
    <div className="register">
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
              console.log(email, password);
              onSubmit();
            }}
            size="large"
            disabled={isRegistering}
          >
            新規登録
          </Button>
          <Link href={"/login"}>登録済みの方はこちら</Link>
        </Stack>
      </Container>
    </div>
  );
};

export default Register;

if (document.getElementById("Register")) {
  ReactDOM.render(<Register />, document.getElementById("Register"));
}
