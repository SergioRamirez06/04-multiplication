import fs from "fs";

interface saveFileUseCase {
    expect: ( options: options ) => boolean

}

interface options {
    fileContent: string,
    fileDestination?: string,
    fileName?: string,
}



export class saveFile implements saveFileUseCase{

    constructor() {}

    expect({
        fileName = "", 
        fileDestination = "", 
        fileContent,
         }: options ): boolean {
    try {
        fs.mkdirSync( fileDestination, { recursive: true });
        fs.writeFileSync( `${ fileDestination }/${ fileName }`, fileContent);
        console.log('File Created');
        return true
    } catch (error) {
        console.error(error)
        return false
    }
    }
}