import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { orange } from '../../constants/color'
import { Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationIcon } from "@mui/icons-material"
import { useNavigate } from 'react-router-dom'

const SearchDialog = lazy(() => import("../specific/Search"))
const NotificationDialog = lazy(() => import("../specific/Notifications"))
const NewGroupDialog = lazy(() => import("../specific/NewGroup"))

const Header = () => {

    const navigate = useNavigate()

    const [isMobile, setIsMobile] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [isNewGroup, setIsNewGroup] = useState(false)
    const [isNotification, setIsNotification] = useState(false)

    const handleMobile = () => {
        console.log("handleMobile");
        setIsMobile(prev => !prev)
    }
    const openSearch = () => {
        console.log("openSearchDialog");
        setIsSearch(prev => !prev)
    }
    const openNewGroup = () => {
        console.log("openNewGroup");
        setIsNewGroup(prev => !prev)
    }
    const openNotification = () => {
        console.log("openNewGroup");
        setIsNotification(prev => !prev)
    }
    const logoutHandler = () => {
        console.log("logoutHandler");
    }
    const navigateToGroup = () => {
        navigate("/groups")
    }
    return (
        <>
            <Box height={"4rem"} sx={{ flexGrow: 1 }}>
                <AppBar position='static' sx={{ bgcolor: orange }}>
                    <Toolbar>
                        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>Chit Chat</Typography>
                        <Box sx={{ display: { xs: "block", sm: "none" } }}>
                            <IconButton color='inherit' onClick={handleMobile}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box>
                            <IconBtn title={"Search"} icon={<SearchIcon />} onClick={openSearch} />
                            <IconBtn title={"New Group"} icon={<AddIcon />} onClick={openNewGroup} />
                            <IconBtn title={"Manage Groups"} icon={<GroupIcon />} onClick={navigateToGroup} />
                            <IconBtn title={"Notifications"} icon={<NotificationIcon />} onClick={openNotification} />
                            <IconBtn title={"Logout"} icon={<LogoutIcon />} onClick={logoutHandler} />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            {
                isSearch && (
                    <Suspense fallback={<Backdrop open />}>
                        <SearchDialog />
                    </Suspense>
                )
            }
            {
                isNotification && (
                    <Suspense fallback={<Backdrop open />}>
                        <NotificationDialog />
                    </Suspense>
                )
            }
            {
                isNewGroup && (
                    <Suspense fallback={<Backdrop open />}>
                        <NewGroupDialog />
                    </Suspense>
                )
            }

        </>
    )
}

const IconBtn = ({ title, icon, onClick }) => {
    return (
        <Tooltip title={title}>
            <IconButton color='inherit' size='large' onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    )
}

export default Header