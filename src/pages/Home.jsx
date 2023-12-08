import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux-saga/redux/slices/dataSlice";
import { BannerSlider, ProductCard } from "../components";
import { imageSlidersBanners } from "../config";
import { useTheme } from "@emotion/react";
import { Favorite } from "@mui/icons-material";
import { CardHeader, IconButton } from "@mui/material";

function getBannerData() {
  return imageSlidersBanners;
}

export default function Album() {
  const dispatch = useDispatch();
  const theme = useTheme();
  
  const bannerSlides = getBannerData();
  const { data: cards, status } = useSelector((state) => state.data);

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {/* <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Shop
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
          <BannerSlider slides={bannerSlides} />
        </Box>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <ProductCard key={card.id} card={card}/>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
