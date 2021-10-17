import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme, useMediaQuery } from "@mui/material";
import Fade from "react-reveal/Fade";
import PricingCard from "components/cards/PricingCard";
import pricingPlans from "data/pricingPlans";

export default function PricingSection() {
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Paper
      id="pricing"
      sx={{
        py: 5,
        px: 3,
        background: "transparent",
      }}
    >
      <Fade bottom>
        <Typography
          variant={isLG ? "h3" : "h4"}
          textAlign="center"
          fontWeight={600}
        >
          Pricing
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          width="70vw"
          margin="10px auto 0"
        >
          We can offer custom plans according to your requirements too...
        </Typography>
      </Fade>
      <Grid
        container
        lg={10}
        rowSpacing={3}
        spacing={{ md: 3 }}
        justifyContent="center"
        sx={{
          py: 5,
          [theme.breakpoints.up("lg")]: {
            margin: "auto !important",
          },
        }}
      >
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} md={6} lg={4}>
            <Fade bottom delay={index * 200}>
              <PricingCard data={plan} />
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
