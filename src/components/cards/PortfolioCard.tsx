import {
  Card,
  IconButton,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { PortfolioItem } from "data/portfolio";

interface PortfolioCardProps {
  data: PortfolioItem;
}

export default function PortfolioCard({ data }: PortfolioCardProps) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        transition: theme.transitions.create(["transform"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        "&:hover": { transform: "scale(1.05)" },
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
        sx={{
          position: "relative",
          paddingRight: "60px",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        <IconButton
          color="primary"
          href={data.url}
          sx={{
            position: "absolute",
            top: "15px",
            right: "15px",
          }}
        >
          <OpenInNewIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}
