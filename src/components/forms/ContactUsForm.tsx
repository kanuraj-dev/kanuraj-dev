import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useRef, useState } from "react";

export default function ContactUsForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

  const handleSubmitClick = () => {
    setTimeout(() => {
      formRef?.current?.reset();
      setIsSent(true);
    }, 500);
  };

  const handleSnackbarClose = () => setIsSent(false);

  return (
    <form ref={formRef} action="https://submit-form.com/yy5sQzzx">
      <Grid
        container
        spacing={2}
        sx={{ "& .MuiTextField-root": { width: "100%" } }}
      >
        <Grid item xs={12} lg={6}>
          <TextField label="Your Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField label="Email / Phone" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Message" multiline rows={4} />
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
