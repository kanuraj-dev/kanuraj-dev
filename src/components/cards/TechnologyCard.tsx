import { Card, CardMedia, useTheme } from "@mui/material";

interface TechnologyCardProps {
  data: {
    title?: string;
    image: string;
  };
}

export default function TechnologyCard({ data }: TechnologyCardProps) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 3,
      }}
    >
      <CardMedia
        component="img"
        image={data.image}
        alt="green iguana"
        sx={{
          height: 140,
          objectFit: "cover",
          [theme.breakpoints.down("md")]: {
            height: 100,
          },
        }}
      />
    </Card>
  );
}
