import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import demoImg from "assets/image/business-boom-mockup.png";

export default function ServiceCard() {
  return (
    <Card
      sx={{
        borderRadius: 3,
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={demoImg}
        alt="green iguana"
        sx={{
          pt: 3,
          objectFit: "contain",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Website Development
        </Typography>
        <Typography variant="body2" color="text.secondary">
          High converting and individual websites that format across all devices
          from desktops to tablets and mobiles. Here is a halt to your search
          for best website designing company in Mumbai. We at JK Web solution.
        </Typography>
      </CardContent>
    </Card>
  );
}
