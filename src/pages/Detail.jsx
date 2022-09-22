import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getUser } from "../api/getUserInfo";
import axios from "axios";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

export async function loader({ params }) {
  return params.id;
}

export default function Detail({ params }) {
  const [user, setUser] = useState();
  const [skills, setSkills] = useState();
  const userId = useLoaderData();
  const theme = useTheme();

  // ページの初回レンダリング時に実行
  useEffect(() => {
    const initUser = async () => {
      const response = await getUser(userId);
      console.log(response);
      setUser(response.user);
      setSkills(response.skills);
    };
    initUser();
  }, [userId]);

  if (!user) {
    return <div>Not Found</div>;
  }

  console.log(skills);

  return (
    <Card
      sx={{
        display: "flex",
        ml: 35,
        mr: 35,
        mt: 10,
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <div className="userShow">
          <CardContent sx={{ flex: "1 0 auto", mt: 10 }}>
            <Typography component="div" variant="h6">
              名前：{user.name}
            </Typography>
            <Typography variant="h6" component="div">
              懸賞金：${user.score}
            </Typography>
            <Typography component="div" variant="h6">
              githubリンク：{user.github}test
            </Typography>
            <Typography component="div" variant="h6">
              使用技術
            </Typography>
            {skills.map((skil) => (
              <Typography key={skil.name} variant="h7">
                ・{skil.name}
              </Typography>
            ))}
          </CardContent>
          <Box sx={{ display: "flex", ml: 15 }}>
            <CardActions>
              <Button size="small" href={`/rank`}>
                ユーザー一覧へ戻る
              </Button>
            </CardActions>
          </Box>
        </div>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image={user.wanted_image_url}
        alt="wanted image"
      />
    </Card>
  );
}
