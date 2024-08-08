import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Items = () => {
  return (
    <Box>
      <img
        src="https://gg.asuracomic.net/storage/media/54/conversions/fb9b38c7-optimized.webp"
        alt="Manhwa of the Week"
        style={{
          borderRadius: "5px",
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
    <Box sx={{ padding: "15px", background: "#17171a",color:"white",borderRadius:"10px" }}>
      <h2 style={{marginBottom:"3px"}}>Popular Today</h2>
      <Grid container spacing={1}>
        <Grid item xs={4} sm={4} md={2.4} lg={2.4}>
          <Items />
        </Grid>
        <Grid item xs={4} sm={4} md={2.4} lg={2.4}>
          <Items />
        </Grid>
        <Grid item xs={4} sm={4} md={2.4} lg={2.4}>
          <Items />
        </Grid>
        <Grid item xs={4} sm={4} md={2.4} lg={2.4}>
          <Items />
        </Grid>
        <Grid item xs={4} sm={4} md={2.4} lg={2.4}>
          <Items />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PopularToday;
