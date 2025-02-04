import React from 'react'
import Container from '@mui/material/Container';

const PageContainer = ({ children }) => {
    return (

        <Container maxWidth="lg" sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>{children}</Container>
    )
}

export default PageContainer