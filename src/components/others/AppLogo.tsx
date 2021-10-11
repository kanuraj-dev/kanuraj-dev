import WebbywolfLight from "assets/image/webbywolf-light.png";
import WebbywolfDark from "assets/image/webbywolf-dark.png";
import { ImgHTMLAttributes } from "react";

interface AppLogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  dark?: boolean;
}

export default function AppLogo({ dark, ...props }: AppLogoProps) {
  return (
    <img
      src={dark ? WebbywolfDark : WebbywolfLight}
      alt="WebbyWolf Logo"
      {...props}
    />
  );
}
