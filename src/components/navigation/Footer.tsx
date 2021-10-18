import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppLogo from "components/others/AppLogo";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Footer() {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        p: 3,
        minHeight: "20vh",
        background: theme.palette.mode === "dark" ? "#0c0c0c" : "#f8f8f8",
      }}
    >
      <footer>
        <Grid container rowSpacing={2} justifyContent="center">
          <Grid
            item
            xs={10}
            md={3}
            display="flex"
            alignItems="center"
            sx={{
              [theme.breakpoints.down("md")]: {
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            <AppLogo
              height="50"
              dark={theme.palette.mode === "light"}
              style={{
                objectFit: "contain",
                marginRight: 10,
              }}
            />
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 600,
                [theme.breakpoints.up("md")]: {
                  flexGrow: 1,
                },
              }}
            >
              Webby
              <span
                style={{
                  color: theme.palette.mode === "dark" ? "#ffeb3b" : "#ff6347",
                }}
              >
                Wolf
              </span>
            </Typography>
          </Grid>
          <Grid
            item
            xs={10}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              [theme.breakpoints.down("md")]: {
                justifyContent: "center",
              },
            }}
          >
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              href="https://wa.link/o285au"
              sx={{
                textTransform: "initial",
                borderRadius: 3,
              }}
            >
              Connect Now
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
              mt={1}
            >
              © 2020 Copyright: WebbyWolf.com
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </Paper>
  );
}
