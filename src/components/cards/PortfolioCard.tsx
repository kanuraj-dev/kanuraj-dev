import {
  Card,
  IconButton,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
  Box,
  useMediaQuery,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { PortfolioItem } from "data/portfolio";

interface PortfolioCardProps {
  data: PortfolioItem;
}

export default function PortfolioCard({ data }: PortfolioCardProps) {
  const theme = useTheme();
  const isLG = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  return (
    <Card
      sx={{
        position: "relative",
        transition: theme.transitions.create(["transform"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        "&:hover": {
          transform: "scale(1.05)",
          "& .cardContent": {
            opacity: 1,
          },
        },
      }}
    >
      <CardMedia
        component="img"
        image={data.image}
        width="100%"
        alt="green iguana"
        sx={{
          objectFit: "contain",
        }}
      />
      <CardContent
        className="cardContent"
        sx={{
          minHeight: "100%",
          position: "absolute",

          borderBottomLeftRadius: "inherit",
          borderBottomRightRadius: "inherit",
          bottom: 0,
          width: "100%",
          color: "white",
          backgroundImage:
            "linear-gradient(180deg,transparent,rgba(37, 37, 37, 0.61),#111)",
          transition: "all .3s ease-in-out",
          opacity: 0,

          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Box
          sx={{
            padding: [0, 5],
            [theme.breakpoints.up("md")]: {
              padding: [0, 3],
            },
          }}
        >
          <Typography gutterBottom variant={isLG ? "h4" : "h5"} component="div">
            {data.title}
          </Typography>
          <Typography variant={isLG ? "body1" : "body2"} color="text.secondary">
            {data.description}
          </Typography>
          {!!data.url && (
            <IconButton
              color="primary"
              target="_blank"
              href={data.url}
              size={isLG ? "large" : "medium"}
              sx={{
                position: "absolute",
                top: "15px",
                right: "15px",
              }}
            >
              <OpenInNewIcon fontSize={isLG ? "large" : "medium"} />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
