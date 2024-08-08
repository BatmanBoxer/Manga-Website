import { Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const TopBar = () => {
  return (
    <Box sx={{ background: {xs:"#6e26b5",sm:"#000000"} }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingY: "5px",
          }}
        >
          <Box sx={{ padding: "0px",color:"white" }}><img src="https://asuracomic.net/images/logo.png" width="40px"/></Box>
          <TextField
            placeholder="Search"
            variant="outlined"
            size="small"
            sx={{
              height: "70%",
              width: {
                xs: "85%",
                sm: "auto",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "white",
              },
              "& .MuiInputBase-input": {
                color: "white", // Set the text color to white
              },
              borderRadius: "10px",
              background: "#333333",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent", // Remove border color
                },
                "&:hover fieldset": {
                  borderColor: "transparent", // Remove border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent", // Remove border color when focused
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default TopBar;
