import React from 'react';
import { Box, Typography } from '@mui/material';

const Descriptions = ({ title, img, genre, description, rating }) => {

  const truncateStringToWords = (str, maxWords) => {
    const wordsArray = str.split(/\s+/);
    if (wordsArray.length > maxWords) {
      const truncatedArray = wordsArray.slice(0, maxWords);
      return truncatedArray.join(' ') + '...';
    }
    return str;
  };

  return (
    <Box sx={{ display: "flex", flexDirection: { md: "row", xs: "column" }, alignItems: {xs:"center",md:"flex-start"},padding:"10px"}}>
      <Box
        component="img"
        src={img?.includes("kunmanga") ? `https://proxyserver632.vercel.app/proxy?url=${img}` : img}
        sx={{ flex: 1, maxHeight: "300px", objectFit: "contain", borderRadius: "8px" }}
        alt={title || "Image"} 
      />
      <Box sx={{ flex: 3, marginLeft: "2%", color: "white" ,maxWidth:{xs:"350px",sm:"500px"},overflow:"hidden"}}>
        <Typography variant="h5" component="h1">{title}</Typography>
        <Typography variant="body1" component="h3">{rating}</Typography>
        <Typography variant="body2" component="p">
          {truncateStringToWords(description || "", 100).replace("Show more", "")}
        </Typography>
      </Box>
    </Box>
  );
}



export default Descriptions;

