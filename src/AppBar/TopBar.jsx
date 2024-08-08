import { Container, TextField } from "@mui/material";
import { Box } from "@mui/system";

const TopBar = () => {
  return (
    <Box sx={{background: "blue",}}>
      <Container>
        <Box sx={{display:"flex" ,justifyContent:"space-between",paddingY:"10px"}}>
        <Box sx={{padding:"5px"}}>Logo</Box>
        <TextField placeholder="Search" variant="outlined" size="small" sx={{width:{xs:"70%" ,sm:"auto"}}}></TextField>

        </Box>
      </Container>
    </Box>
  );
};

export default TopBar;
