import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme, useMediaQuery } from "@mui/material";
import Fade from "react-reveal/Fade";
import BlogCard from "components/cards/BlogCard";
import blogsData from "data/blogsData";

export default function Blogs() {
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Paper
      id="blogs"
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
          Blogs
        </Typography>
      </Fade>
      <Grid
        container
        lg={11}
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
        {blogsData.map((blog, index) => (
          <Grid item md={12} lg={6} xl={4}>
            <Fade bottom delay={index * 200}>
              <BlogCard data={blog} />
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
