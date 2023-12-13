import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material'
const CoinCard = ({ item, index }) => {
    return (
        <Card sx={{ maxWidth: 345 }} style={{ height: "270px " }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                    alt="green iguana"
                />
                <CardContent>
                    <h1>{item.id}</h1>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.quantityPerUnit}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CoinCard