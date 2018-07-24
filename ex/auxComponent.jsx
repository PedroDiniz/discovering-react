import React from "react";
import Component from "./component";

// _____________________________________________________________________________
// Exemplo 3 => componente dentro de componente
export default props => (
  <div>
    <Component name="Pedro" lastName="Diniz" />
    <Component name="Viviane" lastName="Alves" />
    <Component name="Odin" lastName="Alves Diniz" />
  </div>
);
// _____________________________________________________________________________
