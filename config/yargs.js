const { number } = require("yargs");

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "es la base de multiplicar"
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "lista la tabla creada"
  })
  .option("h",{
    alias: "hasta",
    type: number,
    default: 10,
    describe: "describe el limite de la base de multiplicar"
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

  module.exports =argv;
