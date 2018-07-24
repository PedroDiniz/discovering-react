import React from "react";

// _____________________________________________________________________________
//// Exemplo 1 => exportando um componente
// export default () => <h1> First Component YEAAAH!</h1>;
// _____________________________________________________________________________

// _____________________________________________________________________________
//// Exemplo 2 => exportando 2 componentes
// const First = props => <h1>First Component</h1>;

// const Second = props => <h1>Second Component</h1>;

// export { First, Second };
// _____________________________________________________________________________

// _____________________________________________________________________________
//// Exemplo 3 => componente dentro de componente (hardcoded)
//// Exemplo 4 => componente dentro de componente (not hardcoded)
//// Exemplo 5 => Passando propriedades para componentes filhos (single)
//// Exemplo 6 => Passando propriedades para componentes filhos (multiple)
export default props => (
  <div>
    {props.name} <strong>{props.lastName}</strong>
  </div>
);
// _____________________________________________________________________________
