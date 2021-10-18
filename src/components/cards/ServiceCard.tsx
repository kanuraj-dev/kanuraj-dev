import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ServiceType } from "data/services";

interface ServiceCardProps {
  data: ServiceType;
}

export default function ServiceCard({ data }: ServiceCardProps) {
  return (
    <Card
      sx={{
        borderRadius: 3,
      }}
    >
      <CardMedia
        component="img"
        height="170"
        image={data.image}
        alt="green iguana"
        sx={{
          pt: 3,
          pb: 1,
          objectFit: "contain",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
