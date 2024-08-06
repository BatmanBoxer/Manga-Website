import { Box, Typography } from "@mui/material";


const ManhwaofTheWeek = () => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <img
        src="https://gg.asuracomic.net/storage/media/54/conversions/fb9b38c7-optimized.webp"
        alt="Manhwa of the Week"
        style={{ maxWidth: "100%",aspectRatio:"1.3/2" }} // Ensure the image fits within the Box
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0, // Position at the bottom
          left: 0,
          width: "100%",
          height: "100%", // Cover the whole image
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Low transparency black
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end", // Align children to the bottom
          padding: "4px", // Adjust padding if needed
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: "#fff",
            overflow: "hidden", // Prevent text overflow
            textOverflow: "ellipsis", // Show ellipsis if text overflows
            whiteSpace: "nowrap", // Prevent text wrapping
          }}
        >
          Manhwa
        </Typography>
      </Box>
    </Box>
  );
};




const Recommendation = () => {
  return (
    <Box display="flex" gap={1.5} justifyContent="space-between" padding="20px">
      <Box flex={3} sx={{background:"green"}}>Manhwa of The Week</Box>
      <Box flex={1} sx={{display:{xs:"none",md:"block"}}}>
        <ManhwaofTheWeek />
      </Box>
    </Box>
  );
};

export default Recommendation;
