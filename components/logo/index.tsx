import React from "react";
import Image from "next/image";
import { LiteralLogoBlack } from "../../config/assets";

interface Props {
  alt?: string;
  width?: number;
  height?: number;
}
const Logo: React.FC<Props> = ({ alt = "", width = 140, height = 100 }) => {
  return (
    <Image src={LiteralLogoBlack} alt={alt} width={width} height={height} />
  );
};

export default Logo;
