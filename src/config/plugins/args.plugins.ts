import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const formato = ".txt"
export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Multiplicar la tabla del 5"
    })
    .option('l', {
        alias: "limit",
        type: "number",
        default: 10,
        describe: "Multiplication table limit"
    })
    .option('s', {
        alias: "show",
        type: "boolean",
        demandOption: false,
        describe: "Show multiplaction table"
    })
    .option('n', {
        alias: "name",
        type: "string",
        default: `Multiplicaton-table-${formato}`,
        describe: "FileName"
    })
    .option('d', {
        alias: "destination",
        type: "string",
        default: "output",
        describe: "File destination"
    })
    .check( ( argv ) => {
        if( argv.b < 1 ) throw "Tiene que ser mayor 1"
        return true
    })
    .parseSync()
    