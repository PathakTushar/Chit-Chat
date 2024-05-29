import { KeyboardBackspace, Menu as MenuIcon } from '@mui/icons-material'
import { Box, Drawer, Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import React, { memo, useState } from 'react'
import { matblack } from '../constants/color'
import { useNavigate, useSearchParams } from "react-router-dom"
import { Link } from "../components/styles/StyledComponents"
import AvatarCard from "../components/shared/AvatarCard"
import { sampleChats } from "../constants/sampleData"

const Groups = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const chatId = useSearchParams()[0].get("group");

  const navigateBack = () => {
    navigate("/")
  }
  const handleMobile = () => {
    setIsMobileMenuOpen(prev => !prev)
  }
  const handleMobileClose = () => {
    setIsMobileMenuOpen(false)
  }

  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matblack,
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            }
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspace />
        </IconButton>
      </Tooltip>
    </>
  )

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          }
        }}
        sm={4}
        bgcolor={"bisque"}
      >
        <GroupsList myGroups={sampleChats} chatId={chatId}/>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconBtns}
      </Grid>

      <Drawer
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
        sx={{
          display: {
            xs: "block",
            sm: "none",
          }
        }}
      >
        <GroupsList w='50vw' myGroups={sampleChats} chatId={chatId}/>
      </Drawer>

    </Grid>
  )
}

const GroupsList = ({ w = "100%", myGroups = [], chatId }) => {
  return <Stack width={w}>
    {
      myGroups.length > 0 ? (myGroups.map(group => {
        return <GroupListItem group={group} chatId={chatId} key={group._id} />
      })) : (
        <Typography textAlign={"center"} padding={"1rem"}>No Groups</Typography>
      )
    }
  </Stack>
}

const GroupListItem = memo(({ group, chatId }) => {
  console.log(group);
  const { name, avatar, _id } = group;
  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups