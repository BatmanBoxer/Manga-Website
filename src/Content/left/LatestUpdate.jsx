import { Grid } from "@mui/material";
import { Box, height } from "@mui/system";
const ChapterAndTime = () => {
  return (
    <Box sx={{ display: "flex", gap: 1, justifyContent: "space-between" }}>
      <Box sx={{ background: "green", padding: "5px" }}>Chapter</Box>
      <Box sx={{ background: "green", padding: "5px" }}>Time</Box>
    </Box>
  );
};
const Item = () => {
  return (
    <Grid item md={6} xs={12}>
      <Box
        sx={{
          display: "flex",
          height: "15vh",
          paddingX: "10px",
          paddingY: "5px",
          gap: 1,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <img
            src="https://gg.asuracomic.net/storage/media/54/conversions/fb9b38c7-optimized.webp"
            alt="placeholder"
            style={{ height: "100%" }}
          />
        </Box>
        <Box sx={{ flex: 3 }}>
          <h2>Manhwa Name</h2>
          <ChapterAndTime />
          <ChapterAndTime />
          <ChapterAndTime />
        </Box>
      </Box>
    </Grid>
  );
};

const LatestUpdate = () => {
  return (
    <Box sx={{ background: "green" }}>
      <h2 style={{padding:"10px"}}>Latest Update</h2>
      <Grid container spacing={2}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Grid>
    </Box>
  );
};

export default LatestUpdate;
