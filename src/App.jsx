import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Rank from "./pages/Rank";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import { getPosts } from "./api/jsonplaceholder";
import Detail, { loader as detailLoader } from "./pages/Detail";
import { RecoilRoot } from "recoil";

function App() {
  const [posts, setPosts] = useState([]);

  // ページの初回レンダリング時に実行
  useEffect(() => {
    const initPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    };
    initPosts();
  }, []);

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
    <RecoilRoot>
      <>
        <RouterProvider router={router} />
      </>
    </RecoilRoot>
  );
}

export default App;
