import { Box, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

const PopularLayout = (props) => {
  return (
    <Box sx={{ display: "flex", height: "104px", gap: 3, width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "2px",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          sx={{
            marginLeft: "10px",
            marginRight: "10px",
            width: "30px",
            padding: "0",
            height: "30px",
            minWidth: "30px",
          }}
        >
          {props.id}
        </Button>
        <img
          src="https://gg.asuracomic.net/storage/media/54/conversions/fb9b38c7-optimized.webp"
          style={{ height: "90%",minWidth:"65%",borderRadius:"5px" }}

        />
      </Box>

      <Box
        sx={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
      >
        <Typography
          variant="h6"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          ManhwaNameasdasdasdasdassbasljdgfkajdgfkajdsgkajdghfkjasdgfakjsdasd
        </Typography>{" "}
        <Typography variant="h6">Genre</Typography>
        <Typography variant="h6">Rating</Typography>
      </Box>
    </Box>
  );
};
const Popular = () => {
  return (
    <Box sx={{ width: "100%"}}>
      <h2 style={{ padding: "10px" }}>Popular</h2>
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
