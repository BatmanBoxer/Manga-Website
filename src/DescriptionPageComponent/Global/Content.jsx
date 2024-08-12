import { Box } from "@mui/material";
import Popular from "../../HomePageComponent/right/Popular"
import Chapters from "../Left/Chapters";
import Descriptions from "../Left/Descriptions";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Content = () => {
  const { url } = useParams()
  const [data, setData] = useState()

  const fetchData = async (url) => {
    const urltofetch = url.replaceAll("&", "/")
    if (urltofetch.includes("manganato")) {
      const response = await fetch(`https://mangaand-manhwa-api.vercel.app/manganato?info=${urltofetch}`)
      const datafromapi = await response.json()
      setData(datafromapi)
      console.log(datafromapi)
    } else {
      const response = await fetch(`https://mangaand-manhwa-api.vercel.app/kunmanga?info=${urltofetch}`)
      const datafromapi = await response.json()
      setData(datafromapi)
    }
  }
  useEffect(() => {
    fetchData(url)
    
  }, [])

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap={2}
      >

        {/* left */}
        <Box sx={{ flex: 2.5, background: "", display: "flex", flexDirection: "column", gap: 3 }}>
          <Descriptions title={data?.title} genre={data?.genres} description={data?.description} img={data?.img}/>
          <Chapters chapters={data?.chapters}/>
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
            maxHeight: "127vh",
          }}
        >
          <Popular />
        </Box>
      </Box>

    </Box>
  )
}

export default Content
