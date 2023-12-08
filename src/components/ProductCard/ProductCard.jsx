import React from 'react'

import { Favorite } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const ProductCard = ({card}) => {
    const [wishlist,setWishlist]=React.useState(false)
  return (
    <Grid item key={card.id} xs={12} sm={6} md={4}>
    <Card
      style={{ cursor: "pointer" }}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        mx: { xs: "10%", md: "0" },
        position:'relative'
      
      }}
      
    >
  
        <Favorite onClick={()=>setWishlist(!wishlist)} className={`absolute top-0 z-20 right-0 mr-3 mt-2 ${wishlist ? 'text-red-500' : 'text-gray-300'}  `}/>

      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: "56.25%",
        
        }}

        image={card?.images[0]}
     
      />
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {card?.title}
        </Typography>
        <Typography>{card?.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  </Grid>
  )
}

export default ProductCard