import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const Copyright = () => {
  return (
    <Box component="footer" sx={{ p: 2, bgcolor: "#eaeff1" }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {`Copyright © `}
        <Link color="inherit" href="https://ffxi-tools.com/">
          FFXI-Tools
        </Link>
        {` ${new Date().getFullYear()}`}.
      </Typography>
    </Box>
  );
};

export default Copyright;
