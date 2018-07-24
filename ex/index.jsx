import React from "react";
import ReactDOM from "react-dom";

////Exemplo 1
// import Component from "./component";

////Exemplo 2
// import { First, Second } from "./component";

////Exemplo 3
// import AuxComponent from "./auxComponent";

////Exemplo 4
// import Family from "./family";
// import Component from "./component";

////Exemplo 5
// import Family from "./family";
// import Component from "./component";

////Exemplo 6
import Family from "./family";
import Component from "./component";

ReactDOM.render(
  //// Exemplo 1 => exportando um componente
  // <Component />,

  //// Exemplo 2 => exportando 2 componentes
  //   <div>
  //     <First />
  //     <Second />
  //   </div>,

  //// Exemplo 3 => componente dentro de componente (hardcoded)
  //   <AuxComponent />,

  //// Exemplo 4 => componente dentro de componente (not hardcoded)
  //   <Family>
  //     <Component name="Odin" lastName="Alves Diniz" />
  //   </Family>,

  //// Exemplo 5 => Passando propriedades para componentes filhos (single)
  //   <Family lastName="Alves Diniz">
  //     <Component name="Odin" />
  //   </Family>,

  //// Exemplo 6 => Passando propriedades para componentes filhos (multiple)
  <Family lastName="Alves Diniz">
    <Component name="Odin" />
    <Component name="Pedro" />
    <Component name="Viviane" />
  </Family>,

  document.getElementById("app")
);
