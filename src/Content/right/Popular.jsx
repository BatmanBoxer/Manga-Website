import { Box, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

const PopularLayout = (props) => {
  return (
    <Box sx={{ display: "flex", height: "104px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          sx={{
            marginRight: "10px",
            width: "25px",
            padding: "0",
            minWidth: "0",
          }}
        >
    {props.id}
        </Button>
        <img
          src="https://gg.asuracomic.net/storage/media/54/conversions/fb9b38c7-optimized.webp"
          style={{ maxWidth: "70%", height: "90%" }}
        />
      </Box>

      <Box sx={{ display: "flex" ,flexDirection:"column" }}>
        <Typography variant="h6">ManhwaName</Typography>
        <Typography variant="h6">Genre</Typography>
        <Typography variant="h6">Rating</Typography>
      </Box>
    </Box>
  );
};
const Popular = () => {
  return (
    <Box>
      <h2 style={{padding:"10px"}}>Popular</h2>
      <Stack spacing={2}>
        <PopularLayout id={1} />
        <PopularLayout id={2} />
        <PopularLayout id={3} />
        <PopularLayout id={4} />
        <PopularLayout id={5} />
        <PopularLayout id={6} />
        <PopularLayout id={7} />
        <PopularLayout id={8} />
        <PopularLayout id={9} />
        <PopularLayout id={10} />
      </Stack>
    </Box>
  );
};

export default Popular;
