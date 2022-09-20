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

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: [],
    };
    this.setemail = this.setemail.bind(this);
    this.setpassword = this.setpassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  setemail(e) {
    this.setState({ email: e.target.value });
  }

  setpassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("email", this.state.email ? this.state.email : "");
    data.append("password", this.state.password ? this.state.password : "");
    axios
      .post("http://localhost:81/api/login", data)
      .then((res) => {})
      //.catch(e=>this.setState({error:e.response.data.errors}))
      .catch((e) => {
        console.log(e.response.data.errors);
      });
  }
  render() {
    return (
      <div className="register">
        <Container maxWidth="sm" sx={{ pt: 5 }}>
          <Stack spacing={3}>
            <form onSubmit={this.onSubmit} encType="multipart/form-data"></form>
            <TextField
              required
              label="mail"
              defaultValue=""
              type="email"
              value={this.state.email}
              onChange={this.setemail}
            />
            <TextField
              label="password"
              defaultValue=""
              type="password"
              value={this.state.password}
              onChange={this.setpassword}
            />
            <Button
              color="primary"
              type="submit"
              variant="contained"
              onClick={() => {
                console.log(this.state);
              }}
              size="large"
            >
              ログイン
            </Button>
            <Link href="#">新規登録</Link>
            <Link href="#">パスワードを忘れた方はこちら</Link>
          </Stack>
        </Container>
      </div>
    );
  }
}

export default Login;

if (document.getElementById("Login")) {
  ReactDOM.render(<Login />, document.getElementById("Login"));
}
