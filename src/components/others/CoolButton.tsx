import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/system";

interface CoolButtonProps extends ButtonProps {
  small?: boolean;
}

const CoolButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "small",
})<CoolButtonProps>(({ theme, small }) => ({
  width: small ? 160 : 200,
  height: small ? 40 : 60,
  fontSize: small ? 12 : "",
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
