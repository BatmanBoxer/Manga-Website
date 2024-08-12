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
    <Box sx={{ height: "100%" }}>
      <TempleteForRecommendedManhwa />
    </Box>
  );
};

const TempleteForRecommendedManhwa = () => {
  return (
    <Box
      sx={{
        background: "black",
        overflow: "hidden",
        height: "100%",
        position: "relative", // Set the position to relative for the parent Box
      }}
    >
      <Box sx={{ height: "100%" }}>
        <img
          src="https://gg.asuracomic.net/storage/media/54/conversions/fb9b38c7-thumb-small.webp"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Use 'cover' to ensure the image covers the container without distortion
            display: "block",
            filter: "blur(15px)",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.8)",
        }}>
    </Box>
      <Box
        sx={{
          height: "90%",
          position: "absolute", // Make the second Box absolutely positioned
          top: "50%", // Vertically center the box
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Box sx={{ padding: "5%",width:"60%" }}>
          <Typography variant="h4" sx={{ color: "#fff",overflow:"hidden",textOverflow:"ellipsis" }}>
      Manhwa      
    </Typography>
          <Typography variant="subtitle1" sx={{ color: "#fff" }}>
            Author
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#fff" }}>
            Genre
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#fff",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3, // Limit to 3 lines
              WebkitBoxOrient: "vertical",
            }}
          >
            Summary
          </Typography>
        </Box>
        <img
          src="https://gg.asuracomic.net/storage/media/54/conversions/fb9b38c7-thumb-small.webp"
          style={{
            marginLeft: "10%",
            marginTop: "2%",
            height: "75%",
            objectFit: "fit", // Use 'contain' to ensure the image fits within its container
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
};

const Recommendation = () => {
  return (
    <Box
      display="flex"
      gap={1}
      justifyContent="space-between"
      sx={{ maxHeight: "270px", overflow: "hidden" }}
    >
      <Box flex={3} sx={{ background: "green", height: "100%" }}>
        <RecommendedManhwa />
      </Box>
      <Box flex={1} sx={{ display: { xs: "none", md: "block" } }}>
        <ManhwaofTheWeek />
      </Box>
    </Box>
  );
};

export default Recommendation;
