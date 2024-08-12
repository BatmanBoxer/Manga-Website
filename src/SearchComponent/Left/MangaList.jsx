import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Items = ({ name, img, url }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/description/${url.replaceAll("/", "&")}`)
  }
  return (
    <Box sx={{ height: "100%", overflow: "hidden" }} onClick={handleClick}>
      <img
        src={img.includes("kunmanga") ? `https://proxyserver632.vercel.app/proxy?url=${img}` : img}

        alt={name}
        style={{
          borderRadius: "5px",
          width: "100%",
          height: "70%",
          objectFit: "cover",
        }}
      />
      <Typography
        variant="h6"
        align="start"
        sx={{
          marginTop: "8px",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};
const GridContainerlayout = ({ name, img, url }) => {
  return (
    <Grid item xs={6} sm={4} lg={2.4}>
      <Items name={name} img={img} url={url} />
    </Grid>
  )
}
const MangaList = ({ id }) => {
  const [manganatoloading, setManganatoLoading] = useState(true)
  const [kunMangaloading, setKunMangaLoading] = useState(true)
  const [manganato, setManganato] = useState([])
  const [kunManga, setKunManga] = useState([])

  const fetchData = async (id) => {
  console.log(`id ${id}`)
    console.log(typeof id)
    const kunmangaid = id.replaceAll("-", "+")

    
    console.log(`kunmaga ${kunmangaid}`)
    
    const url = `https://mangaand-manhwa-api.vercel.app/manganato?name=${id}` 
    const manganatoresponse = await axios.get(url)
    const kunmangaresponse = await axios.get(`https://mangaand-manhwa-api.vercel.app/kunmanga?name=${kunmangaid}`)

    const manganatodata = await manganatoresponse.data
    const kunmangadata = await kunmangaresponse.data

    setManganatoLoading(false)
    setKunMangaLoading(false)

    setManganato(manganatodata)
    setKunManga(kunmangadata)
  }

  useEffect(() => {
    setManganatoLoading(true)
    setKunMangaLoading(true)

    fetchData(id)
  }, [id])

  return (
    <Box sx={{ padding: "15px", background: "#17171a", color: "white", borderRadius: "10px" }}>
      <h1 style={{ marginBottom: "3px" }}>MangaNato</h1>
     <Grid container spacing={1}>
        {manganatoloading ? (
          <Typography variant="h6" color="white">Loading...</Typography>
        ) : (
          manganato.map((manga) => (
            <GridContainerlayout
              key={manga.id} // Make sure to add a unique key prop
              name={manga.title}
              img={manga.img}
              url={manga.link}
            />
          ))
        )}
      </Grid>

      <h1 style={{ marginTop: "5px", borderTop: "4px solid white" }}>KunManga</h1>
      <Grid container spacing={1}>
        {kunMangaloading ? (
          <Typography variant="h6" color="white">Loading...</Typography>
        ) : (
          kunManga.map((manga) => (
            <GridContainerlayout
              key={manga.id} // Make sure to add a unique key prop
              name={manga.title}
              img={manga.img}
              url={manga.link}
            />
          ))
        )}
      </Grid>

    </Box>
  );
};

export default MangaList
