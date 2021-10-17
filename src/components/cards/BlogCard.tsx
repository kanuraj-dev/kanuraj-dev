import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface BlogCardProps {
  data: {
    title: string;
    content: string;
    image: string;
    url: string;
  };
}

export default function BlogCard({ data }: BlogCardProps) {
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
        height="200"
        image={data.image}
        alt="green iguana"
        sx={{
          objectFit: "cover",
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
          {data.content}
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
