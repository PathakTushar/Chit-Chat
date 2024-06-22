import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table'
import { Avatar, Box, Stack } from '@mui/material'
import { dashboardData } from '../../constants/sampleData'
import { fileFormat, transformImage } from '../../lib/features'
import moment from 'moment'
import RenderAttachment from '../../components/shared/RenderAttachment'

const columns = [
    {
        field: "id",
        headerName: "ID",
        headerClassName: "table-header",
        widht: 200,
    },
    {
        field: "attachments",
        headerName: "Attachments",
        headerClassName: "table-header",
        widht: 200,
        renderCell: (params) => {
            const {attachments} = params.row;

            return attachments.length > 0 ? 
                attachments.map(i => {
                    const url = i.url;
                    const file = fileFormat(url)

                    return (
                        <Box alignContent={"center"}>
                            <a
                                href={url}
                                download
                                target='_blank'
                                style={{
                                    color: "black"
                                }}
                            >
                                {RenderAttachment(file, url)}
                            </a>
                        </Box>
                    )
                })
            : "No Attachments";
        }
    },
    {
        field: "content",
        headerName: "Content",
        headerClassName: "table-header",
        widht: 400,
    },
    {
        field: "sender",
        headerName: "Send By",
        headerClassName: "table-header",
        widht: 200,
        renderCell: (params) => (
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
                <span>{params.row.sender.name}</span>
            </Stack>
        )
    },
    {
        field: "chat",
        headerName: "Chat",
        headerClassName: "table-header",
        widht: 220,
    },
    {
        field: "groupChat",
        headerName: "Group Chat",
        headerClassName: "table-header",
        widht: 100,
    },
    {
        field: "createdAt",
        headerName: "Time",
        headerClassName: "table-header",
        widht: 250,
    },
]

const MessageManagement = () => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        setRows(dashboardData.messages.map(i => ({
            ...i,
            id: i._id,
            sender: {
                name: i.sender.name,
                avatar: transformImage(i.sender.avatar, 50)
            },
            createdAt: moment(i.createdAt).format("MMMM Do YYYY, h:mm:ss a")
        })))
    }, [])

    return (
        <AdminLayout>
            <Table heading={"All Messages"} columns={columns} rows={rows} rowHeight={150}/>
        </AdminLayout>
    )
}

export default MessageManagement