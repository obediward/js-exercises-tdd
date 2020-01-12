const reciboDatos = {};

function carSales(Probando) {
  Probando.forEach(element => {
    if (reciboDatos[element.make] == undefined) {
      reciboDatos[element.make] = element.price;
    } else {
      reciboDatos[element.make] += element.price;
    }
  });
  return reciboDatos;
}
module.exports = carSales;
