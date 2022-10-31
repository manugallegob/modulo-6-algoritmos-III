var CAMBIO = [
  {
    valor: 200,
    tipo: "billete",
  },
  {
    valor: 100,
    tipo: "billete",
  },
  {
    valor: 50,
    tipo: "billete",
  },
  {
    valor: 20,
    tipo: "billete",
  },
  {
    valor: 10,
    tipo: "billete",
  },
  {
    valor: 5,
    tipo: "moneda",
  },
  {
    valor: 2,
    tipo: "moneda",
  },
  {
    valor: 1,
    tipo: "moneda",
  },
  {
    valor: 0.5,
    tipo: "moneda",
  },
  {
    valor: 0.2,
    tipo: "moneda",
  },
  {
    valor: 0.1,
    tipo: "moneda",
  },
  {
    valor: 0.05,
    tipo: "moneda",
  },
  {
    valor: 0.02,
    tipo: "moneda",
  },
  {
    valor: 0.01,
    tipo: "moneda",
  },
];

var calcCambio = (cono, total, entrega) => {
  let devolucion = entrega - total;
  let ul = document.getElementById("cambio-optimo");
  ul.innerHTML = ``;
  document.getElementById("cambio").innerText = devolucion + "€";
  let i = 0;
  while (devolucion > 0) {
    let partEntera = Math.trunc(devolucion.toFixed(2) / cono[i].valor);
    if (partEntera > 0) {
      let li = document.createElement("li");
      li.innerHTML = `
      <li> ${cono[i].tipo}s de ${cono[i].valor}€: ${partEntera} </li>
      `;
      ul.appendChild(li);
    }
    devolucion -= partEntera * cono[i].valor;
    i++;
  }
};

var getImputs = () => {
  let total = document.getElementById("inputTotal").value;
  let entrega = document.getElementById("inputAmount").value;
  isNaN(total) && isNaN(entrega)
    ? alert("Uno o todos tus valores no son correctos. Vuelve a intentarlo")
    : calcCambio(CAMBIO, total, entrega);
};

document.getElementById("calc").addEventListener("click", () => {
  getImputs();
});
