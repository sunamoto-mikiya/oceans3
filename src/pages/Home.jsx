import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { getWantedImage } from "../api/wanted-image";
import Header from "../components/Header";


const Wrapper = styled('div')({
    textAlign: "center",
    margin: "50px",
})

const Img = styled('img')({
    width: "80%",
    maxWidth: "500px",
    textAlign: "center",
})

export default function Home() {
    const [wantedImageUrl, setWantedImageUrl] = useState('')

    useEffect(() => {
        const initImageUrl = async() => {
            const fetchedImage = await getWantedImage(2)
            setWantedImageUrl(fetchedImage.imageUrl)
        }
        initImageUrl()
    }, [])

    return (
        <>
            <Header />
            <Wrapper>
            {wantedImageUrl === ''
                ? <h1>プロフィールを入力して手配書を作ろう！！</h1>
                : <Img src={wantedImageUrl} alt="手配書" />
            }
            </Wrapper>
        </>
    )
}
