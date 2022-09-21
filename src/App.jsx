import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Rank from "./pages/Rank";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import Detail, { loader as detailLoader } from "./pages/Detail";
import { RecoilRoot } from "recoil";

function App() {
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
