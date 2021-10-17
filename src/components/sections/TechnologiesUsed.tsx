import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme, useMediaQuery } from "@mui/material";
import ServiceCard from "components/cards/ServiceCard";
import Fade from "react-reveal/Fade";
import TechnologyCard from "components/cards/TechnologyCard";
import technologiesUsed from "data/technologiesUsed";

export default function TechnologiesUsed() {
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Paper
      id="technoligies-used"
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
          Technologies Used
        </Typography>
      </Fade>
      <Grid
        container
        lg={10}
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        alignItems="center"
        sx={{
          py: 5,
          [theme.breakpoints.up("lg")]: {
            margin: "auto !important",
          },
        }}
      >
        {technologiesUsed.map((tech, index) => (
          <Grid item xs={6} md={4} lg={3}>
            <Fade bottom delay={index * 200}>
              <TechnologyCard data={tech} />
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
