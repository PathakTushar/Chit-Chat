import { Add as AddIcon, Delete as DeleteIcon, Done as DoneIcon, Edit as EditIcon, KeyboardBackspace, Menu as MenuIcon } from '@mui/icons-material'
import { Backdrop, Box, Button, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { Suspense, lazy, memo, useEffect, useState } from 'react'
import { matblack } from '../constants/color'
import { useNavigate, useSearchParams } from "react-router-dom"
import { Link } from "../components/styles/StyledComponents"
import AvatarCard from "../components/shared/AvatarCard"
import { sampleChats, sampleUsers } from "../constants/sampleData"
import UserItem from '../components/shared/UserItem'
const ConfirmDeleteDialog = lazy(()=>import("../components/dialogs/ConfirmDeleteDialog"))
const AddMemberDialog = lazy(()=>import("../components/dialogs/AddMemberDialog"))

const isAddMember = false

const Groups = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [groupName, setGroupName] = useState("")
  const [groupNameUpdated, setGroupNameUpdated] = useState("")
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false)

  const chatId = useSearchParams()[0].get("group");

  useEffect(() => {
    setGroupName(`Group Name ${chatId}`)
    setGroupNameUpdated(`Group Name ${chatId}`)

    return () => {
      setGroupName("")
      setGroupNameUpdated("")
      setIsEdit(false)
    }

  }, [chatId])


  const navigateBack = () => {
    navigate("/")
  }
  const handleMobile = () => {
    setIsMobileMenuOpen(prev => !prev)
  }
  const handleMobileClose = () => {
    setIsMobileMenuOpen(false)
  }

  const updateGroupName = () => {
    setIsEdit(false)
  }

  const openConfirmDeleteHandler = ()=>{
    setConfirmDeleteDialog(true)
  }
  const closeConfirmDeleteHandler = ()=>{
    setConfirmDeleteDialog(false)
  }
  const openAddMemberHandler = ()=>{}
  const removeMemberHandler = (id)=>{}
  const deleteHandler = ()=>{
    closeConfirmDeleteHandler()
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

  const GroupName = <Stack
    direction={"row"}
    alignItems={"center"}
    justifyContent={"center"}
    spacing={"1rem"}
    padding={"3rem"}
  >
    {
      isEdit ? (
        <>
          <TextField value={groupNameUpdated} onChange={(e) => setGroupNameUpdated(e.target.value)} />
          <IconButton onClick={updateGroupName}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant='h4'>{groupName} </Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>
        </>
      )
    }
  </Stack>

  const ButtonGroup = (
    <Stack
      direction={{
        sm: "row",
        xs: "column-reverse",
      }}
      spacing={"1rem"}
      p={{
        sm: "1rem",
        xs: "0",
        md: "1rem 4rem",
      }}
    >
      <Button size='large' color='error' variant='outlined' startIcon={<DeleteIcon />} onClick={openConfirmDeleteHandler}>Delete Group</Button>
      <Button size='large' variant='contained' startIcon={<AddIcon />} onClick={openAddMemberHandler}>Add Member</Button>
    </Stack>
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
        <GroupsList myGroups={sampleChats} chatId={chatId} />
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

        {groupName && <>
          {GroupName}
          <Typography margin={"2rem"} alignSelf={"flex-start"} variant='body1' >Members</Typography>
          <Stack
            maxWidth={"45rem"}
            width={"100%"}
            boxSizing={"border-box"}
            padding={{
              sm: "1rem",
              xs: "0",
              md: "1rem 4rem"
            }}
            spacing={"2rem"}
            // bgcolor={"bisque"}
            height={"50vh"}
            overflow={"auto"}
          >
            {
              sampleUsers.map(i => (
                <UserItem user={i} isAdded styling={{
                  boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.2)",
                  padding: "1rem 2rem",
                  borderRadius: "1rem"
                }} handler={removeMemberHandler} key={i._id} />
              ))
            }
          </Stack>
          {ButtonGroup}
        </>
        }

      </Grid>

      {
        isAddMember && <Suspense fallback={<Backdrop open />}>
          <AddMemberDialog />
        </Suspense>
      }

      {
        confirmDeleteDialog && (
          <Suspense fallback = {<Backdrop open />}>
            <ConfirmDeleteDialog 
              open={confirmDeleteDialog}
              handleClose={closeConfirmDeleteHandler}
              deleteHandler={deleteHandler}
            />
          </Suspense>
        )
      }
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
        <GroupsList w='50vw' myGroups={sampleChats} chatId={chatId} />
      </Drawer>

    </Grid>
  )
}

const GroupsList = ({ w = "100%", myGroups = [], chatId }) => {
  return <Stack width={w} bgcolor={"bisque"} height={"100%"} overflow={"auto"}>
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
      <Stack direction={"row"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups