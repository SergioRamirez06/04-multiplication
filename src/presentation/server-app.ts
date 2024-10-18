import { createTable } from "../domain/use-Case/create-table-use-case"
import { saveFile } from "../domain/use-Case/save-file-use-case"

interface runOptions {
    base: number,
    limit: number,
    showTable: boolean,
    fileName: string,
    fileDestination: string
}

export class ServerApp {
    static run({ base, limit, showTable, fileDestination, fileName }: runOptions) {
        console.log('server runn...')
        const table = new createTable().expect({ limit, base })
        const wasCreated =  new saveFile().expect({ fileContent: table, fileDestination, fileName })

         if( showTable ) console.log( table );

         ( wasCreated ) 
         ? console.log('Fue Creado') 
         : console.error('No fue creado')
    }
}