import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { FormEvent, useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactUsForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

  const handleFormSubmitSuccess = () => {
    setTimeout(() => {
      formRef?.current?.reset();
      setIsSent(true);
    }, 500);
  };

  const handleSnackbarClose = () => setIsSent(false);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ts7k2g",
        "template_7jbqp37",
        formRef.current || "",
        "user_qPskrN04NHsj403bSnmVE"
      )
      .then(
        (result) => {
          handleFormSubmitSuccess();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={handleFormSubmit}>
      <Grid
        container
        spacing={2}
        sx={{ "& .MuiTextField-root": { width: "100%" } }}
      >
        <Grid item xs={12} lg={6}>
          <TextField label="Your Name" variant="outlined" name="from_name" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField label="Email / Phone" variant="outlined" name="contact" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Message" multiline rows={4} name="message" />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            color="info"
            variant="contained"
            sx={{ width: "100%", textTransform: "initial" }}
          >
            Send
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isSent}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          We will reach you soon!
        </Alert>
      </Snackbar>
    </form>
  );
}
