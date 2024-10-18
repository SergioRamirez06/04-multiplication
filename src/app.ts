import { yarg } from '../src/config/plugins/args.plugins';
import { ServerApp } from './presentation/server-app';


( async() => {
    await main();
    console.log('Fin del programa')
})();

async function main() {
    const { b:base, l:limit, s: showTable = true, d:fileDestination, n: fileName } = yarg
    ServerApp.run({base, limit, showTable, fileDestination, fileName })
}
