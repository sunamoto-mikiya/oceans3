import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { getUser } from "../api/getUserInfo"
import axios from 'axios';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export async function loader({ params }) {
    return params.id
}

export default function Detail({ params }) {
    const [user, setUser] = useState({})

    const userId = useLoaderData();

    // ページの初回レンダリング時に実行
    useEffect(() => {
        const initUser = async() => {
            const response = await getUser(userId)
            setUser(response)
            console.log(response)
        }
        initUser()
    }, [userId])
    
    if (!user) {
        return <div>Not Found</div>
    }

    return (
        <div style={{ margin:'auto',width:'50%'}}>
            <Card sx={{ maxWidth: 700 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={user.wanted_image_url}
                    alt="wanted image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ margin:'auto'}}>
                    {user.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    ${user.score}
                    </Typography>
                    <Typography variant="h7" color="text.secondary">
                    使用技術
                    </Typography>
                    
                </CardContent>
                    <CardActions>
                    <Button size="small" href={`/rank`}>ユーザー一覧へ戻る</Button>
                    </CardActions>
            </Card>
        </div>
    )
}
