import React from "react";
import { Box } from "@mui/system";
import ManhwaOfTheWeek from "../left/Recommendation";
import Popular from "../right/Popular";
import PopularToday from "../left/PopularToday";
import LatestUpdate from "../left/LatestUpdate";

const Content = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      gap={2}
    >

    {/* left */}
      <Box sx={{ flex: 2.5, background: "" ,display:"flex",flexDirection:"column",gap:3}}>
        <ManhwaOfTheWeek />
        <PopularToday/>
        <LatestUpdate/>
      </Box>

    {/* right */}
      <Box
        sx={{
          padding: "5px",
          flex: 1,
          borderRadius: "5px",  
          width: "17vw",
          background: "#17171a",
          color: "white",
          display: { xs: "none", md: "block" },
        }}
      >
        <Popular />
      </Box>
    </Box>
  );
};

export default Content;
