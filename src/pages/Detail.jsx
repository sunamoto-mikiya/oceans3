import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { getPost } from "../api/jsonplaceholder"


export async function loader({ params }) {
    return params.id
}

export default function Detail({ params }) {
    const [post, setPost] = useState({})
    const postId = useLoaderData();

    // ページの初回レンダリング時に実行
    useEffect(() => {
        const initPost = async() => {
            const response = await getPost(postId)
            setPost(response)
        }
        initPost()
    }, [postId])
    
    // postが取得できているか
    if (!post) {
        return <div>Not Found</div>
    }

    return (
        <>
            <h1>Detail</h1>
            <div>{post.title}</div>
        </>
    )
}
