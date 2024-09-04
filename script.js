/*Proyecto: Calculadora*/
let noHayPunto = true

function getObjetoPantalla () {
  return document.getElementById('pantalla')
}
function getValorPantalla () {
  return document.getElementById('pantalla').value
}
function setValorPantalla (valor) {
  document.getElementById('pantalla').value = valor
}

function escribirPantalla (objBoton) {
  if (!(isNaN(getValorPantalla().slice(-1)) && isNaN(objBoton.value))) {
    if (noHayPunto) {
      if (objBoton.value == '.') {
        if (getValorPantalla() == '') {
          getObjetoPantalla().value += '0' + objBoton.value
          noHayPunto = false
        } else {
          getObjetoPantalla().value += objBoton.value
          noHayPunto = false
        }
      } else {
        getObjetoPantalla().value += objBoton.value
      }
    } else {
      if (
        objBoton.value == '/' ||
        objBoton.value == '*' ||
        objBoton.value == '-' ||
        objBoton.value == '+'
      ) {
        getObjetoPantalla().value += objBoton.value
        noHayPunto = true
      } else if (!isNaN(objBoton.value))
        getObjetoPantalla().value += objBoton.value
    }
  } else if (objBoton.value == '.') {
    if (getValorPantalla().slice(-1) != '.') {
      getObjetoPantalla().value += '0' + objBoton.value
      noHayPunto = false
    }
  } else setValorPantalla(getValorPantalla().slice(0, -1) + objBoton.value)
}

function borrarPantalla () {
  setValorPantalla('')
  noHayPunto = true
}

function mostrarResultado () {
  operacion = getValorPantalla()
  if (isNaN(getValorPantalla().slice(-1)))
    operacion = getValorPantalla().slice(0, -1)
  let resultado = eval(operacion)
  if (resultado % 1 != 0) noHayPunto = false
  setValorPantalla(resultado)
}

//return setValorPantalla(new Function('return ' + operacion + ';').call())
