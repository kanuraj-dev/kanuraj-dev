import Button, { ButtonProps } from "@mui/material/Button";
import { styled, Theme } from "@mui/system";

const CoolButton = styled(
  Button,
  {}
)<ButtonProps>(({ theme }) => ({
  width: 200,
  height: 60,
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: 600,
  cursor: "pointer",
  color: "#fff",
  border: "3px solid #c266d3",
  backgroundImage: "linear-gradient(30deg, #c266d3 50%, transparent 50%)",
  backgroundSize: 500,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0%",
  transition: "background 300ms ease-in-out",
  "&:hover": {
    backgroundPosition: "100%",
    color: "#c266d3",
  },
}));

export default CoolButton;
