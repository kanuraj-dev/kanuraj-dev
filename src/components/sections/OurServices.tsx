import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme, useMediaQuery } from "@mui/material";
import ServiceCard from "components/cards/ServiceCard";
import Fade from "react-reveal/Fade";
import services from "data/services";

export default function OurServices() {
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Paper
      id="our-services"
      sx={{
        py: 5,
        px: 3,
        background: theme.palette.mode === "dark" ? "#0c0c0c" : "#f8f8f8",
      }}
    >
      <Fade bottom>
        <Typography
          variant={isLG ? "h3" : "h4"}
          textAlign="center"
          fontWeight={600}
        >
          Our Services
        </Typography>
      </Fade>
      <Grid
        container
        lg={10}
        rowSpacing={3}
        spacing={{ md: 3 }}
        justifyContent="center"
        alignItems="center"
        sx={{
          py: 5,
          [theme.breakpoints.up("lg")]: {
            margin: "auto !important",
          },
        }}
      >
        {services.map((service, index) => (
          <Grid item xs={12} md={6} lg={4}>
            <Fade bottom delay={index * 200}>
              <ServiceCard data={service} />
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
