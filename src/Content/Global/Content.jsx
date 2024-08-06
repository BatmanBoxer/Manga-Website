import React from "react";
import { Box } from "@mui/system";
import ManhwaOfTheWeek from "../left/Recommendation";
import Popular from "../right/Popular";
import PopularToday from "../left/PopularToday";

const Content = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      gap={2}
    >

    {/* left */}
      <Box sx={{ flex: 2.5, background: "red" ,display:"flex",flexDirection:"column",gap:3}}>
        <ManhwaOfTheWeek />
        <PopularToday/>
      </Box>

    {/* right */}
      <Box
        sx={{
          flex: 1,
          background: "blue",
          display: { xs: "none", md: "block" },
        }}
      >
        <Popular />
      </Box>
    </Box>
  );
};

export default Content;
