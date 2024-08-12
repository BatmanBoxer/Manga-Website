import { Button } from "@mui/material";
import { Box } from "@mui/system"
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";


const Content = () => {
  const { id } = useParams('id');
  const [trackid, setTrackId] = useState(0);
  const { state } = useLocation();
  const [images, setImages] = useState([]);
  const fetchData = async (url) => {
    const fetchurl = url.includes("kun") ? `https://mangaand-manhwa-api.vercel.app/kunmanga?image=${url}` : `https://mangaand-manhwa-api.vercel.app/manganato?image=${url}`;
    const response = await fetch(fetchurl);
    const data = await response.json();
    setImages(data);
  }
  useEffect(() => {
    setTrackId(id);
  }, [])

  useEffect(() => {
    if (trackid) {
      console.log("track id");
      fetchData(state.chapters[trackid].url);
    }
  }, [trackid])



  const handlePrev = () => {
    console.log(trackid + 1);
    setTrackId(parseInt(trackid) + 1);
    window.scrollTo(0, 0);
  }
  const handleNext = () => {
    console.log(trackid - 1);
    setTrackId(parseInt(trackid) - 1);
    window.scrollTo(0, 0);
  }
  return (


    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center', // Centers content horizontally
      }}
    >
      {
        images?.map((image, index) => (
          <img
            src={image.img.includes("kun") ? image.img : `https://proxy-server-for-manga-api.vercel.app/?url=${image.img}`}
            key={image.id}
            style={{
              maxWidth: '100%',
              width: { xs: '100%', sm: '90%', md: '60%', lg: '75%' },
              display: 'block', // Ensures the image respects margin auto
              margin: '0 auto', // Center image horizontally if needed
            }}
          />
        ))
      }
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end", marginBottom: "10%", paddingX: "20%", gap: 2 }}>
        <Button variant="contained" onClick={handlePrev}>Prev</Button>
        <Button variant="contained" onClick={handleNext}>Next</Button>
      </Box>
    </Box>
  );
};

export default Content
