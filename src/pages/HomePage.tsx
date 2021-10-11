import { Grid, Typography, useTheme, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Fade from "react-reveal/Fade";
import darkBg from "assets/image/dark-bg.jpg";
// import BusinessBoomMockup from "assets/image/business-boom-mockup.png";
import BusinessBoomMockup from "assets/image/mockup3.png";
import CoolButton from "components/others/CoolButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function HomePage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "98vh",
        backgroundImage: `url('${darkBg}')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        height="100%"
        spacing={1}
        color="white"
      >
        <Grid
          item
          md={5}
          sx={{
            alignItems: "center",
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          <Fade bottom delay={500}>
            <Typography variant="h3" fontWeight={700} mb={1}>
              Hey Champion,
            </Typography>
            <Typography variant="h4" fontWeight={600} mb={4}>
              Why stay behind in this digital world, Lets take your business
              online
            </Typography>
            <CoolButton endIcon={<ArrowForwardIcon />}>Connect Now</CoolButton>
          </Fade>
        </Grid>
        <Grid item md={6} justifyContent="center">
          <Fade bottom>
            <img
              src={BusinessBoomMockup}
              alt="business-boom-mockup"
              width="95%"
            />
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
}
