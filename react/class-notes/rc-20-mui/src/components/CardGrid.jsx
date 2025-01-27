import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Grid2, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const CardGrid = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
    }, [])



    return (
        <Container>
            <Typography>CARD GRID</Typography>

            <Grid2 container sx={{ gap: 2 }}>
                {products.map((a) => (
                    <Grid2 size={{ xs: 6, md: 4 }} item key={a.id}>
                        {/* <Grid xs={6} md={4} item key={a.id}> */}
                        <Card sx={{ maxWidth: 345, height: 500 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image={a.thumbnail}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {a.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                    {a.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained">
                                    Share
                                </Button>
                                <Button variant="contained" color="warning" size="small">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </Container>
    );
}

export default CardGrid