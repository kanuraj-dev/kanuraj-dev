import ArrowForward from "@mui/icons-material/ArrowForward";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { PricingDataType } from "data/pricingPlans";

const WhatsappLink = "https://wa.link/o285au";

interface PricingCardProps {
  data: PricingDataType;
}

export default function PricingCard({ data }: PricingCardProps) {
  return (
    <Card
      sx={{
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontWeight={700}
          textAlign="center"
        >
          {data.title}
        </Typography>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          fontWeight={700}
          textAlign="center"
        >
          ₹ {data.amount}/-
        </Typography>
        <Divider sx={{ width: "70%", margin: "15px auto" }} />
        <Typography variant="body2">
          <ul style={{ padding: "0 20px" }}>
            {data.features.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          color="secondary"
          endIcon={<ArrowForward />}
          sx={{ textTransform: "initial" }}
          href={WhatsappLink}
        >
          Get quote on Whatsapp
        </Button>
      </CardActions>
    </Card>
  );
}
