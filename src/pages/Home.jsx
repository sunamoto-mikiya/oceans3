import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { getWantedImage } from "../api/wanted-image";
import { RecoilRoot, useRecoilState } from "recoil";
import { isLoginAtom } from "../components/isLoginAtom";
import { userIdAtom } from "../components/userIdAtom";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Wrapper = styled("div")({
  textAlign: "center",
  margin: "50px",
});

const Img = styled("img")({
  width: "80%",
  maxWidth: "500px",
  textAlign: "center",
});

export default function Home() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const [userId, setUserId] = useRecoilState(userIdAtom);
  const navigate = useNavigate();
  const [wantedImageUrl, setWantedImageUrl] = useState("");

  useEffect(() => {
    const initImageUrl = async () => {
      const fetchedImage = await getWantedImage(userId);
      setWantedImageUrl(fetchedImage.imageUrl);
    };
    initImageUrl();
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        {wantedImageUrl === "" ? (
          <h1>プロフィールを入力して手配書を作ろう！！</h1>
        ) : (
          <Img src={wantedImageUrl} alt="手配書" />
        )}
      </Wrapper>
    </>
  );
}
