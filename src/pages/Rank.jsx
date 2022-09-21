import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

export default function Rank() {

    const [users, setUsers] = useState([]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'image', headerName: '写真', width: 80 },
        { field: 'name', headerName: '名前', width: 280 },
        {
            field: 'score',
            headerName: '懸賞金($)',
            type: 'number',
            width: 120,
        },
        {
            field: 'editBtn',
            headerName: '詳細',
            sortable: false,
            width: 90,
            disableClickEventBubbling: true,
            renderCell: (params) => <Button variant="contained" color="primary">詳細</Button>
        },
    ];
    useEffect(() => {
        getUserData();
    },[])

    const getUserData = () => {
        axios
            .get('http://localhost:81/api/rank')
            .then(response => {
                setUsers(response.data);  
                console.log(response.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }

    let rows = [];
    
    users.forEach((user) =>
        rows.push({
            id: user.id,
            image: user.user_image_url,
            name: user.name,
            score: user.score,
        })
    );

    return (
        <>
            <Header />
            <div class="centering_parent">
                <h2 class="centering_item">
                    ユーザー一覧
                </h2>
            </div>
            <div>
                <div style={{ height: 400, width: '70%' ,margin:'auto',width:'50%'}} >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    />
                </div>
            </div> 
            <Footer />
        </>
    )
}
