import { Box, Typography } from "@mui/material"
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ChapterItem = ({ title, chapters,id }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/reader/${id}`, { state: { chapters } });  }
  return (
    <Box
      onClick={handleClick}
      sx={{
        paddingLeft: '16px', // Equivalent to Tailwind's 'pl-4'
        paddingY: '8px', // Equivalent to Tailwind's 'py-2'
        border: '1px solid rgba(162, 162, 162, 0.2)', // Equivalent to Tailwind's 'border-[#A2A2A2]/20'
        borderRadius: '8px', // Equivalent to Tailwind's 'rounded-md'
        width: '100%', // Equivalent to Tailwind's 'w-full'
        cursor: 'pointer', // Equivalent to Tailwind's 'cursor-pointer'
        '&:hover': {
          backgroundColor: '#343434', // Equivalent to Tailwind's 'hover:bg-[#343434]'
        },
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: 'white', // Equivalent to Tailwind's 'text-white'
          fontWeight: 'medium', // Equivalent to Tailwind's 'font-medium'
        }}
      >
        <h3
          style={{
            textDecoration: 'none',
            color: 'inherit',
            display: 'block',
          }}
        >
          Chapter {title}
          <span style={{ paddingLeft: '4px' }}></span>
        </h3>
      </Typography>
      <Typography
        variant="caption"
        sx={{
          color: '#A2A2A2',
        }}
      >
        August 7th 2024
      </Typography>
    </Box>
  );
};
const Chapters = ({ chapters }) => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
      {chapters?.map((chapter, index) => (
        <ChapterItem
          title={chapter.title}
          id={index}
          key={index}
          chapters={chapters}
        />
      ))}
    </Box>)
}

export default Chapters
