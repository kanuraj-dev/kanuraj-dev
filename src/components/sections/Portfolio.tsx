import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme, useMediaQuery } from "@mui/material";
import Fade from "react-reveal/Fade";
import PortfolioCard from "components/cards/PortfolioCard";
import portfolioData from "data/portfolio";

export default function Portfolio() {
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Paper
      sx={{
        py: 5,
        px: 3,
        minHeight: "100vh",
        background: theme.palette.mode === "dark" ? "#0c0c0c" : "#f8f8f8",
      }}
    >
      <Fade bottom>
        <Typography
          variant={isLG ? "h3" : "h4"}
          textAlign="center"
          fontWeight={600}
        >
          Portfolio
        </Typography>
      </Fade>
      <Grid
        container
        lg={11}
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
        {portfolioData.map((portfolio, index) => (
          <Grid item xs={12} md={6} lg={4}>
            <Fade bottom delay={index * 200}>
              <PortfolioCard data={portfolio} />
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
