import React from "react";
import { Button } from "./button.styles";

interface Props {
  onclick: () => void;
  title: string;
}

const PrimaryButton: React.FC<Props> = ({ onclick, title }) => {
  return <Button onClick={onclick}>{title}</Button>;
};

export default PrimaryButton;
