import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";

const NavBar = () => {
  return (
    <Box
      sx={{
        background: "#6e26b5",
        display: {
          xs: "none",
          sm: "flex",
        },
        justifyContent: "space-between",
      }}
    >
      <Container>
        <Box sx={{ display: "flex", justifyContent:"space-between",paddingBottom:"10px",paddingTop:"7px",color:"white"}}>
          <Box sx={{ display: "flex", gap: 2 ,paddingTop:"10px"}}>
            <Box><h3>Home</h3></Box>
            <Box><h3>Bookmarks</h3></Box>
            <Box><h3>Comics</h3></Box>
            <Box><h3>Profile</h3></Box>
          </Box>
          <Button
        variant="contained"
        sx={{
          backgroundColor: '#322f36', // Set the background color
          color: '#FFFFFF',           // Set the text color
          '&:hover': {
            backgroundColor: '#55505c', // Set the background color on hover
          },
        }}
      >
        Login
      </Button>        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
