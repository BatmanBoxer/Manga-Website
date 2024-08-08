import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Items = () => {
  return (
    <Box>
      <img
        src="https://gg.asuracomic.net/storage/media/54/conversions/fb9b38c7-optimized.webp"
        alt="Manhwa of the Week"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          display: "block",
        }}
      />
      <Typography
        variant="h6"
        align="start"
        sx={{
          marginTop: "8px", // Adjust as needed
        }}
      >
        Manhwa
      </Typography>
    </Box>
  );
};

const PopularToday = () => {
  return (
    <Box sx={{ padding: "10px", background: "yellow" }}>
      <h2 style={{marginBottom:"3px"}}>Popular Today</h2>
      <Grid container spacing={1}>
        <Grid item xs={6} sm={4} md={4} lg={2.4}>
          <Items />
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={2.4}>
          <Items />
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={2.4}>
          <Items />
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={2.4}>
          <Items />
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={2.4}>
          <Items />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PopularToday;
