import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Popular from "../../HomePageComponent/right/Popular"
import MangaList from "../Left/MangaList";

const Content = () => {
  const { id } = useParams()
  return (
    <Box >
     <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      gap={2}
    >

    {/* left */}
      <Box sx={{ flex: 2.5 ,display:"flex",flexDirection:"column",gap:3}}>
          <MangaList id={id} /> 
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
     
    </Box>
  )
}

export default Content
