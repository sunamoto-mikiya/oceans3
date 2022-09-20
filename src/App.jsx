import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Form from './pages/Form';
import Rank from './pages/Rank';
import { useEffect, useState } from 'react';
import { getPosts } from './api/jsonplaceholder';
import Detail, { loader as detailLoader } from './pages/Detail';


function App() {
  const [posts, setPosts] = useState([])

  // ページの初回レンダリング時に実行
  useEffect(() => {
    const initPosts = async() => {
      const fetchedPosts = await getPosts()
      setPosts(fetchedPosts)
    }
    initPosts()
  }, [])

  // ルーティング
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home posts={posts} />,
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
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
