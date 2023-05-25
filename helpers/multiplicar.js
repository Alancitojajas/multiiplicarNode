const fs = require("fs");
let colors = require('colors/safe');
const crearArchivo = (base = 5, listar= false, hasta =10) => {
  //imprimir tabla del 5
  let salida = "";
  function imprimirTabla5() {
    console.log(colors.cyan("=============="));
    console.log(colors.cyan(` Tabla del ${base}`));
    console.log(colors.cyan("=============="));
    for (let i = 1; i <= hasta; i++) {
      let resultado = base * i;
      salida += `${base} * ${i} = ${resultado} \n`;
    }
    console.log(colors.green(salida));
  }
  if(listar){
    imprimirTabla5();
  }
  console.log(colors.yellow(`Tabla del ${base} creada`));

  const promesa = new Promise((resolve, reject) => {
    const nombreArchivo = `tabla-${base}.txt`;

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    resolve(nombreArchivo)
    reject("Error al guardar el archivo");
  });

  return promesa;
};

module.exports = {
  crearArchivo,
};
