import { Height } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const ManhwaofTheWeek = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      <img
        src="https://gg.asuracomic.net/storage/media/54/conversions/fb9b38c7-optimized.webp"
        alt="Manhwa of the Week"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "fill",
          display: "block",
          overflow: "hidden",
        }}
      ></img>
      <Box
        sx={{
          position: "absolute",
          bottom: "0px",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.8)",
        }}
      ></Box>
      <Typography
        variant="h6"
        align="start"
        sx={{
          padding: "10px",
          position: "absolute",
          bottom: "0px",
          color: "#fff",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        Manhwa
      </Typography>
    </Box>
  );
};

const RecommendedManhwa = () => {
  return (
    <Box sx={{maxheight:"100%"}}>
      <TempleteForRecommendedManhwa />);
    </Box>
)
};
const TempleteForRecommendedManhwa = () => {
  return (
    <Box sx={{ background: "black", overflow: "hidden", position: "relative",maxHeight:"100%" }} className="Batman">
      <Box sx={{maxHeight:"100%"}}>
      <img
        src="https://gg.asuracomic.net/storage/media/54/conversions/fb9b38c7-thumb-small.webp"
        style={{
          width: "100%",
          height: "270px",
         objectFit: "cover", // Use 'cover' to ensure the image covers the container without distortion
          display: "block",
          filter: "blur(15px)",        }}
      />

      </Box>
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "red",
          position: "absolute",
          padding: "50px",
        }}
      > 
        <Box sx={{ flex: 3 }}>asdasd</Box>
        <img src="https://gg.asuracomic.net/storage/media/54/conversions/fb9b38c7-thumb-small.webp" style={{flex:1,width:"20%",height:"auto",objectFit:"scale-down"}} />
      </Box>
    </Box>
  );
};
const Recommendation = () => {
  return (
    <Box
      display="flex"
      gap={1.5}
      justifyContent="space-between"
      sx={{ maxHeight: "270px", overflow: "hidden" }} // Ensure no overflow
    >
      <Box flex={3.5} sx={{ background: "green" }}>
        <RecommendedManhwa/>
      </Box>
      <Box flex={1} sx={{ display: { xs: "none", md: "block" } }}>
        <ManhwaofTheWeek />
      </Box>
    </Box>
  );
};

export default Recommendation;
