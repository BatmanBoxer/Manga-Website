import { Container } from "@mui/material";
import { Box } from "@mui/system";

const NavBar = () => {
  return (
    <Box
      sx={{
        background: "red",
        display: {
          xs: "none",
          sm: "flex",
        },
        justifyContent: "space-between",
      }}
    >
      <Container>
        <Box sx={{ display: "flex", justifyContent:"space-between" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box><h2>Home</h2></Box>
            <Box><h2>Bookmarks</h2></Box>
            <Box><h2>Comics</h2></Box>
            <Box><h2>Profile</h2></Box>
          </Box>
          <Box><h2>Login</h2></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
