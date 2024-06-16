import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import { AdminPanelSettings as AdminPanelSettingsIcon, Notifications as NotificationsIcon } from '@mui/icons-material'
import moment from 'moment'
import { SearchField, CurvedButton } from '../../components/styles/StyledComponents'

const Dashboard = () => {

    const Appbar = (
        <Paper
            elevation={3}
            sx={{ padding: "2rem", margin: "2rem 0", borderRadius: "1rem" }}
        >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                <AdminPanelSettingsIcon sx={{fontSize: "3rem"}} />
                <SearchField placeholder='Search...' />
                <CurvedButton>
                    Search
                </CurvedButton>
                <Box flexGrow={1} />
                <Typography display={{
                    xs: "none",
                    lg: "block"
                }}>
                    {
                        moment().format("dddd, D MMMM YYYY")
                    }
                </Typography>
                <NotificationsIcon />
            </Stack>
        </Paper>
    )

  return (
    <AdminLayout>
        <Container component={"main"}>
        {Appbar}
        </Container>
    </AdminLayout>
  )
}

export default Dashboard