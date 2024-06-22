import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table'
import { Avatar, Stack } from '@mui/material'
import { dashboardData } from '../../constants/sampleData'
import { transformImage } from "../../lib/features"
import AvatarCard from "../../components/shared/AvatarCard"

const columns = [
    {
        field: "id",
        headerName: "ID",
        headerClassName: "table-header",
        widht: 200,
    },
    {
        field: "avatar",
        headerName: "Avatar",
        headerClassName: "table-header",
        widht: 150,
        renderCell: (params) => (
            <AvatarCard avatar={params.row.avatar} />
        )
    },
    {
        field: "name",
        headerName: "Name",
        headerClassName: "table-header",
        widht: 300,
    },
    {
        field: "totalMembers",
        headerName: "Total Members",
        headerClassName: "table-header",
        widht: 120,
    },
    {
        field: "members",
        headerName: "Members",
        headerClassName: "table-header",
        widht: 400,
        renderCell: (params) => (<AvatarCard max={100} avatar={params.row.members} />)
    },
    {
        field: "totalMessages",
        headerName: "Total Messages",
        headerClassName: "table-header",
        widht: 120,
    },
    {
        field: "creator",
        headerName: "Created By",
        headerClassName: "table-header",
        widht: 250,
        renderCell: (params) => (
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                <Avatar alt={params.row.creator.name} src={params.row.creator.avatar} />
                <span>{params.row.creator.name}</span>
            </Stack>
        )
    },
]


const ChatManagement = () => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        setRows(dashboardData.chats.map((i) => ({
            ...i,
            id: i._id,
            avatar: i.avatar.map(ni => transformImage(ni, 50)),
            members: i.members.map(ni => transformImage(ni.avatar, 50)),
            creator: {
                name: i.creator.name,
                avatar: transformImage(i.creator.avatar, 50),
            }
        })))
    }, [])

    return (
        <AdminLayout>
            <Table heading={"All Chats"} columns={columns} rows={rows} />
        </AdminLayout>
    )
}

export default ChatManagement