import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Rank from "./pages/Rank";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import { getUsers } from "./api/getUserInfo";
import Detail, { loader as detailLoader } from "./pages/Detail";
import { RecoilRoot } from "recoil";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

function App() {
  const [posts, setPosts] = useState([]);

  // ページの初回レンダリング時に実行
  //レンダリング遅らせる
  useEffect(() => {
    const initPosts = async () => {
      setPosts();
    };
    initPosts();
  }, []);

  const theme = createTheme({
    palette: {
      background: {
        default: "#fff9c4",
      },
      primary: {
        main: "#212121",
        contrastText: "#f5f5f5",
        light: "#f5f5f5",
      },
      secondary: {
        main: "#212121",
      },
      text: {
        primary: "#212121",
      },
      info: {
        main: "#212121",
        light: "#212121",
      },
    },
  });

  // ルーティング
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/form",
      element: <Form />,
    },
    {
      path: "/rank",
      element: <Rank />,
    },
    {
      path: "/detail/:id",
      element: <Detail />,
      loader: detailLoader,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RecoilRoot>
        <>
          <RouterProvider router={router} />
        </>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
