import fs from "fs";
import { yarg } from "./config/plugins/args.plugins";

const { b:base, s:showTable, l:limit } = yarg

let outPutMessage = ''
const headerMessage = `
================================
        Tabla ${ base }
================================\n
`

for (let i = 0; i <= limit; i++) {
    outPutMessage += `${ base } x ${ i } = ${ base * i}\n` 
};

outPutMessage = headerMessage + outPutMessage

if( showTable ){
    console.log(outPutMessage);
};

const outPutPath = `./outputs`
fs.mkdirSync( outPutPath, { recursive: true });

fs.writeFileSync( `${ outPutPath }/tabla-${ base }.txt`, outPutMessage );
console.log('File Created');