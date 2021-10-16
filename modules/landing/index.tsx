import React from "react";
import Nav from "./components/nav";
import { Menues } from "./components/nav/nav.types";

const MENUES = [
  "Servicios",
  "Proyectos",
  "Nosotros",
  "Testimonios",
  "Blog",
  "Cotizador",
];

const Landing = () => {
  return (
    <div>
      <Nav menues={MENUES} />
    </div>
  );
};

export default Landing;
