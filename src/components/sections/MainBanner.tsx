import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Fade from "react-reveal/Fade";
import BusinessBoomMockup from "assets/image/mockup3.png";
import CoolButton from "components/others/CoolButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function MainBanner() {
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        height: isLG ? "90vh" : "100vh",
        paddingTop: !isLG ? "30px" : "",
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        flexDirection={isLG ? "row" : "column"}
        height="100%"
      >
        <Grid
          item
          lg={5}
          sx={{
            alignItems: "center",
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          <Fade left delay={500}>
            <Typography variant={isLG ? "h3" : "h5"} fontWeight={700} mb={1}>
              Hey Champion,
            </Typography>
            <Typography variant={isLG ? "h4" : "h6"} fontWeight={600} mb={4}>
              Why stay behind in this digital world, Lets take your business
              online
            </Typography>
            <CoolButton small={!isLG} endIcon={<ArrowForwardIcon />}>
              Connect Now
            </CoolButton>
          </Fade>
        </Grid>
        <Grid item lg={6} justifyContent="center" textAlign="center">
          <Fade bottom>
            <img
              src={BusinessBoomMockup}
              alt="business-boom-mockup"
              width="100%"
            />
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
}
