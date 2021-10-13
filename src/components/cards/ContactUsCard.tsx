import { green, pink } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import ContactUsForm from "components/forms/ContactUsForm";
import { useMediaQuery } from "@mui/material";

const contact = {
  call: "tel:+919518760250",
  whatsapp: "https://wa.link/o285au",
  email: "mailto:info.webbywolf@gmail.com",
};

export default function ContactUsCard() {
  const isLG = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  return (
    <Paper sx={{ p: 2 }}>
      <Grid
        container
        alignItems="center"
        justifyContent={isLG ? "flex-start" : "center"}
      >
        <Grid item xs={12} md={3} lg={1}>
          <Stack
            direction={isLG ? "column" : "row"}
            spacing={4}
            justifyContent="center"
            sx={{
              p: 4,
              "& .MuiAvatar-root": {
                width: 56,
                height: 56,
                color: "#F9F9F9",
              },
            }}
          >
            <IconButton aria-label="Call" href={contact.call}>
              <Avatar>
                <CallIcon />
              </Avatar>
            </IconButton>

            <IconButton aria-label="Whatsapp" href={contact.whatsapp}>
              <Avatar sx={{ bgcolor: pink[500] }}>
                <WhatsAppIcon />
              </Avatar>
            </IconButton>

            <IconButton aria-label="Email" href={contact.email}>
              <Avatar sx={{ bgcolor: green[500] }}>
                <EmailIcon />
              </Avatar>
            </IconButton>
          </Stack>
        </Grid>

        <Grid item xs={12} md={2} lg={2} display="flex" justifyContent="center">
          <Divider
            orientation={isLG ? "vertical" : "horizontal"}
            flexItem
            sx={isLG ? { height: "12rem" } : { width: "12rem", mb: 4 }}
          />
        </Grid>

        <Grid item xs={10} md={7} lg={8} sx={{ pb: !isLG ? 4 : "" }}>
          <ContactUsForm />
        </Grid>
      </Grid>
    </Paper>
  );
}
