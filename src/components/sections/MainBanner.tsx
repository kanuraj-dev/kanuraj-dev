import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Fade from "react-reveal/Fade";
import BusinessBoomMockup from "assets/image/mockup3.png";
import CoolButton from "components/others/CoolButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function MainBanner() {
  const theme = useTheme();
  const isXL = useMediaQuery(theme.breakpoints.up("xl"));
  const isLG = useMediaQuery(theme.breakpoints.up("lg"));
  const isMD = useMediaQuery(theme.breakpoints.up("sm"));

  const handleConnectNowClick = () => {
    document.getElementById("contact-us")?.scrollIntoView();
  };

  return (
    <Box
      sx={{
        minHeight: isLG ? "90vh" : "95vh",
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        flexDirection={isLG ? "row" : "column"}
        minHeight="inherit"
      >
        <Grid
          item
          xs={11}
          sm={10}
          lg={5}
          sx={{
            alignItems: "center",
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          <Fade left delay={500}>
            <Typography
              variant={isXL ? "h3" : isMD ? "h4" : "h5"}
              fontWeight={700}
              mb={1}
            >
              Hello there 👋
            </Typography>
            <Typography
              variant={isXL ? "h4" : isMD ? "h5" : "h6"}
              fontWeight={600}
              mb={4}
            >
              At webbywolf, we provide highly scalable and modern designed web
              solutions
            </Typography>

            <a
              target="_blank"
              href="https://www.fiverr.com/webbywolf"
              id="connect-now-button"
              data-source="main-banner"
              style={{ textDecoration: "none" }}
            >
              <CoolButton small={!isLG} endIcon={<ArrowForwardIcon />}>
                Fiverr Profile
              </CoolButton>
            </a>
          </Fade>
        </Grid>
        <Grid item sm={8} lg={6} justifyContent="center" textAlign="center">
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
