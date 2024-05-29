import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { Face as FaceIcon, AlternateEmail as UsernameIcon, CalendarMonth as CalendarIcon } from '@mui/icons-material'
import moment from "moment"

const Profile = () => {
    return (
        <Stack spacing={"2rem"} alignItems={"center"}>
            <Avatar sx={{
                width: 200,
                height: 200,
                objectFit: "contain",
                marginBottom: "1rem",
                border: "5px solid white"
            }}
            />
            <ProfileCard heading={"bio"} text={"hello, how are you doing?"} />
            <ProfileCard heading={"Username"} text={"tusharph1"} Icon={<UsernameIcon />}/>
            <ProfileCard heading={"Name"} text={"Tushar Pathak"} Icon={<FaceIcon />}/>  
            <ProfileCard heading={"Joined"} text={moment("2024-03-12T00:00:00.000Z").fromNow()} Icon={<CalendarIcon />}/>  
        </Stack>
    )
}

const ProfileCard = ({ text, Icon, heading }) => {
    return (
        <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} color={"white"} textAlign={"center"}>
            {Icon && Icon}
            <Stack>
                <Typography variant='body1'> {text} </Typography>
                <Typography variant='caption' color={"gray"}> {heading} </Typography>
            </Stack>
        </Stack>
    )
}

export default Profile