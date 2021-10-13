import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme, useMediaQuery } from "@mui/material";
import Fade from "react-reveal/Fade";
import ContactUsCard from "components/cards/ContactUsCard";

export default function ContactUs() {
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Paper
      sx={{
        py: 5,
        px: 3,
        minHeight: "100vh",
        background: "transparent",
      }}
    >
      <Fade bottom>
        <Typography
          variant={isLG ? "h3" : "h4"}
          textAlign="center"
          fontWeight={600}
        >
          Contact US
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          width="70vw"
          margin="10px auto 0"
        >
          Let's get connected
        </Typography>
      </Fade>

      <Grid xs={12} md={10} lg={8} margin="3rem auto">
        <ContactUsCard />
      </Grid>
    </Paper>
  );
}
